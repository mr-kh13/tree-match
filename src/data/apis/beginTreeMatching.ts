import type { Match } from "../types/match";
import type { Step } from "../types/step";
import { get } from "../utils/apiClient";

export interface FirstStepResult {
  question: Step;
  match: Match;
}

export const beginTreeMatching = async () => {
  return get<FirstStepResult>("/api/begin");
};
