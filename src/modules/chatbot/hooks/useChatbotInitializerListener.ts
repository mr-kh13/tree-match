import { useDispatch } from "react-redux";
import { addStep } from "../chatbotSlice";
import { useEffect } from "react";
import { FirstStepResult } from "@/data/apis/beginTreeMatching";

export function useChatbotInitializerListener(initialStep: FirstStepResult) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addStep(initialStep.question));
  }, []);
}
