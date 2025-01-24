import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
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
  reducers: (create) => ({
    addStep: create.reducer((state, action: PayloadAction<Step>) => {
      state.steps.push({ ...action.payload, selectedAnswer: null });
    }),
    setStepAnswer: create.reducer(
      (
        state,
        action: PayloadAction<{ stepId: Step["step_id"]; answer: Answer }>
      ) => {
        state.steps = state.steps.map((step) => {
          if (step.step_id === action.payload.stepId) {
            return { ...step, selectedAnswer: action.payload.answer };
          }
          return step;
        });
      }
    ),
    setMatch: create.reducer((state, action: PayloadAction<Match>) => {
      state.match = action.payload;
    }),
    resetChatbot: create.reducer((state) => {
      state.steps = initialState.steps;
      state.match = initialState.match;
    }),
  }),
  selectors: {
    selectSteps: (state) => state.steps,
    selectCurrentStepId: (state) => {
      if (state.steps.length < 1) {
        return null;
      }
      return state.steps[state.steps.length - 1].step_id;
    },
    selectCurrentStepAnswers: (state) => {
      if (state.steps.length < 1) {
        return [];
      }
      return state.steps[state.steps.length - 1].answers;
    },
    selectIsMatchFound: (state) => {
      return state.match != null;
    },
    selectMatch: (state) => {
      return state.match;
    },
  },
});

export const { addStep, setMatch, setStepAnswer, resetChatbot } =
  chatbotSlice.actions;

export const {
  selectSteps,
  selectCurrentStepId,
  selectCurrentStepAnswers,
  selectIsMatchFound,
  selectMatch,
} = chatbotSlice.selectors;
