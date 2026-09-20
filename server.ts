import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are a knowledgeable insurance advisory specialist representing Vitannis (vitannis.com).
Vitannis provides independent, objective insurance consulting, expert guidance, and specialized solutions to business owners, private clients, and wealth advisors.

Key areas of expertise:
1. Long-Term Care & Immediate Care Plan:
   - Vitannis specializes in the "Immediate Care Plan" — a medically underwritten immediate annuity designed specifically for individuals already residing in, or about to enter, an assisted living facility, nursing home, or requiring memory care.
   - Traditional LTC insurance must be purchased years before illness; the Immediate Care Plan is unique because it uses medical underwriting to provide guaranteed, increased monthly lifetime income directly to cover care facility costs and close the monthly care gap.
   - Protects family assets and preserves inheritance from being rapidly exhausted by skyrocketing care costs.

2. Business Solutions:
   - Defined Benefit Plans and Cash Balance Plans for substantial tax deductions.
   - Key Person Insurance, Buy-Sell Agreement funding, and Overhead Expense coverage.

3. Private Clients & High-Net-Worth Families:
   - Comprehensive policy reviews, premium financing, irrevocable life insurance trusts (ILIT) liquidity, and wealth preservation.

4. Advisor Partnerships:
   - Acting as a trusted, white-glove insurance department for RIAs and financial planners with specialized expertise and complete transparency.

Guidelines for responses:
- Keep answers clear, professional, empathetic, and structured with concise bullet points where appropriate.
- Never give formal legal or tax advice, and remind the user that AI guidance is for informational and educational purposes.
- Encourage users to reach out to Vitannis advisors or schedule a confidential consultation for personalized calculations.`;

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', serverTime: new Date().toISOString() });
  });

  // Secure Server-side Gemini Chat Endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({ error: 'A valid message is required.' });
      }

      const ai = getGeminiClient();
      if (!ai) {
        return res.status(500).json({
          error: 'Gemini API key is not configured on the server. Please verify GEMINI_API_KEY.',
        });
      }

      // Build message contents array from optional history
      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history) {
          if (item && (item.role === 'user' || item.role === 'model') && typeof item.text === 'string') {
            contents.push({
              role: item.role,
              parts: [{ text: item.text }],
            });
          }
        }
      }

      // Append current user message
      contents.push({
        role: 'user',
        parts: [{ text: message.trim() }],
      });

      const CANDIDATE_MODELS = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];
      let replyText = '';
      let lastErr: any = null;

      for (const modelName of CANDIDATE_MODELS) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
              temperature: 0.7,
            },
          });

          if (response && response.text) {
            replyText = response.text;
            break;
          }
        } catch (err: any) {
          lastErr = err;
          console.warn(`Model ${modelName} encountered issue (${err?.status || err?.message}). Trying next candidate...`);
        }
      }

      if (!replyText) {
        throw lastErr || new Error('No candidate model could generate a response.');
      }

      return res.json({ reply: replyText });
    } catch (error: any) {
      console.error('Server-side Gemini Error:', error?.message || error);
      return res.status(500).json({
        error: 'Unable to generate advice at this moment. Please try again in a few moments.',
      });
    }
  });

  // Legacy fallback for policy decoder / assessment if needed
  app.post('/api/gemini/legacy', async (req, res) => {
    try {
      const { prompt, systemInstruction } = req.body;
      const ai = getGeminiClient();
      if (!ai) {
        return res.status(500).json({ error: 'Server configuration error.' });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          systemInstruction: systemInstruction || SYSTEM_INSTRUCTION,
        },
      });

      return res.json({ result: response.text || '' });
    } catch (err: any) {
      console.error('Legacy API Error:', err);
      return res.status(500).json({ error: 'Failed to generate response' });
    }
  });

  // Vite middleware in development vs static file serving in production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.use((req, res, next) => {
      if (req.method === 'GET' && !req.path.startsWith('/api')) {
        return res.sendFile(path.join(distPath, 'index.html'));
      }
      next();
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
