import { createSlice } from "@reduxjs/toolkit";
import type { Step } from "@/data/types/step";
import type { Match } from "@/data/types/match";
import type { Answer } from "@/data/types/answer";

export interface ChatbotStep extends Step {
  selectedAnswer: Answer | null;
}

export interface ChatbotSliceState {
  steps: ChatbotStep[];
  match: Match | null;
}

const initialState: ChatbotSliceState = {
  steps: [],
  match: null,
};

export const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {},
  selectors: {},
});

export const {} = chatbotSlice.actions;

export const {} = chatbotSlice.selectors;
