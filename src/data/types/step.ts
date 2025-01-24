import { Answer } from "./answer";
import { Question } from "./question";

export interface Step {
  step_id: number;
  question: Question;
  answers: Answer[];
}
