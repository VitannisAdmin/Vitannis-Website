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
 * Calls the local Netlify Serverless Function instead of Google directly
 */
async function callGemini(prompt: string, systemInstruction: string = ""): Promise<string> {
  const url = `/.netlify/functions/gemini`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, systemInstruction })
    });
    
    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }

    const data = await response.json();
    return data.result || "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Local API Error:", error);
    return "I apologize, but we are experiencing high traffic. Please try again in a moment.";
  }
}

/**
 * Generates a response for the Policy Decoder tool
 */
export const decodePolicy = async (text: string): Promise<string> => {
  return callGemini(text, DECODER_SYSTEM_INSTRUCTION);
};

/**
 * Generates a response for the Strategic Assessment tool
 */
export const generateAssessment = async (userType: string, situation: string): Promise<string> => {
  const prompt = `User Type: ${userType}. User Situation: ${situation}`;
  return callGemini(prompt, ASSESSMENT_SYSTEM_INSTRUCTION);
};
