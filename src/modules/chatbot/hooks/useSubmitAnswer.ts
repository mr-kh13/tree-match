import { useDispatch, useSelector } from "react-redux";
import {
  addStep,
  selectCurrentStepId,
  setMatch,
  setStepAnswer,
} from "../chatbotSlice";
import type { Answer } from "@/data/types/answer";
import { submitAnswer, SubmitAnswerResult } from "@/data/apis/submitAnswer";

export function useSubmitAnswer() {
  const currentStepId = useSelector(selectCurrentStepId);
  const dispatch = useDispatch();

  const isMatchFound = (result: SubmitAnswerResult) => {
    return result && result.match != null;
  };

  const handleSubmitAnswer = async (answer: Answer) => {
    if (currentStepId) {
      dispatch(setStepAnswer({ stepId: currentStepId, answer }));
      const result = await submitAnswer({
        step_id: currentStepId,
        answer,
      });
      if (isMatchFound(result)) {
        dispatch(setMatch(result.match));
      } else {
        dispatch(addStep(result.question));
      }
    }
  };

  return { handleSubmitAnswer };
}
