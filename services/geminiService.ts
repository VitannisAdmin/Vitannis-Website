export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

/**
 * Communicates with the secure server-side API endpoint (/api/chat).
 * Ensures no API keys or internal AI credentials are ever exposed to the client or browser bots.
 */
export const sendMessageToAdvisor = async (
  message: string,
  history: Array<{ role: 'user' | 'model'; text: string }> = []
): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history })
    });

    if (!response.ok) {
      // Fallback for Netlify deployment environment if /api is not proxied
      if (response.status === 404) {
        const netlifyRes = await fetch('/.netlify/functions/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: message })
        });
        if (netlifyRes.ok) {
          const netlifyData = await netlifyRes.json();
          return netlifyData.result || "Thank you for reaching out. Please connect with our fiduciary team for customized advice.";
        }
      }
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server responded with status ${response.status}`);
    }

    const data = await response.json();
    return data.reply || "I apologize, but I could not generate a response at this time. Please try asking again or contact a Vitannis advisor.";
  } catch (error: any) {
    console.error("Advisory Chat Error:", error);
    return "I apologize, but we are experiencing a temporary connectivity issue. Please try again in a moment, or contact our fiduciary team directly.";
  }
};

/**
 * Legacy compatibility wrappers
 */
export const decodePolicy = async (text: string): Promise<string> => {
  return sendMessageToAdvisor(`Please explain this insurance policy wording in plain English: ${text}`);
};

export const generateAssessment = async (userType: string, situation: string): Promise<string> => {
  return sendMessageToAdvisor(`I am a ${userType}. Here is my situation: ${situation}. What insurance strategies do you recommend?`);
};

