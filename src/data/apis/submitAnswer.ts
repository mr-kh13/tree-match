import type { Answer } from "../types/answer";
import type { Match } from "../types/match";
import type { Step } from "../types/step";
import { post } from "../utils/apiClient";

export interface SubmitAnswerResult {
  question: Step;
  match: Match;
}

interface Body {
  step_id: Step["step_id"];
  answer: Answer;
}

export const submitAnswer = async (body: Body) => {
  return post<Body, SubmitAnswerResult>("/api/answer", body);
};
