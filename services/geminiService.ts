import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client once
const ai = new GoogleGenAI({ apiKey });

// System prompts for specific tools
const DECODER_SYSTEM_INSTRUCTION = `You are a friendly, professional insurance expert at Vitannis. 
Your goal is to explain complex insurance terms or policy text in simple, plain English suitable for a non-expert. 
Keep the tone reassuring and professional. 
Avoid legal advice, but provide clarity on what the words generally mean.
Keep the response concise (under 150 words).`;

const ASSESSMENT_SYSTEM_INSTRUCTION = `You are a senior partner at Vitannis Insurance Advisory. 
Your goal is to suggest 2-3 high-level insurance or financial protection strategies based on the user's description.

Context on Vitannis Services:
- For Business Owners: Mention "Defined Benefit Plans" for tax deductions, "Key Person Insurance", or "Overhead Expense" coverage.
- For Individuals: Focus on "Long Term Care" (primary focus), Life Insurance liquidity, or Disability protection.
- For Advisors: Focus on partnership, white-glove service, and fiduciary documentation.

Tone: Professional, Fiduciary, Strategic.
Format: Use bullet points. Keep it under 200 words. Always include a disclaimer that this is for educational purposes.`;

/**
 * Generates a response for the Policy Decoder tool
 */
export const decodePolicy = async (text: string): Promise<string> => {
  if (!apiKey) throw new Error("API Key is missing");

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: text,
      config: {
        systemInstruction: DECODER_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text || "Unable to decode this policy text at the moment.";
  } catch (error) {
    console.error("Gemini Decoder Error:", error);
    throw new Error("Failed to process the policy text.");
  }
};

/**
 * Generates a response for the Strategic Assessment tool
 */
export const generateAssessment = async (userType: string, situation: string): Promise<string> => {
  if (!apiKey) throw new Error("API Key is missing");

  const prompt = `User Type: ${userType}. User Situation: ${situation}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: ASSESSMENT_SYSTEM_INSTRUCTION,
        temperature: 0.7, // Slightly creative for strategy
      },
    });

    return response.text || "Unable to generate assessment at the moment.";
  } catch (error) {
    console.error("Gemini Assessment Error:", error);
    throw new Error("Failed to generate strategic assessment.");
  }
};