import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEYS } from "./constants";
export const geminiai = new GoogleGenAI({ apiKey: GEMINI_KEYS });