import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let ai: GoogleGenAI | null = null;

try {
  // In a real app, ensure this key is not exposed to the client directly via ENV if possible,
  // or use a backend proxy. For this portfolio demo, we assume process.env.API_KEY is available.
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I cannot connect to the AI service at the moment. Please try contacting Bagaja directly via email.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: RESUME_CONTEXT,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster, direct answers
      },
    });

    return response.text || "I didn't receive a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while processing your request. Please try again later.";
  }
};