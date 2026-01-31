import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

let ai: GoogleGenAI | null = null;

try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

const SYSTEM_PROMPT = `
You are an AI assistant for Rohith Virlanki's portfolio website. 
Your goal is to answer questions about Rohith professionally using ONLY the following resume context.
Do not invent facts. If the answer is not in the context, say you don't have that information.
Keep answers concise and friendly.

RESUME CONTEXT:
${JSON.stringify(RESUME_DATA)}
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, my brain (API Key) is currently disconnected. Please enjoy the static portfolio!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I encountered an error while thinking about that.";
  }
};
