import { useDispatch } from "react-redux";
import { addStep } from "../chatbotSlice";
import { beginTreeMatching } from "@/data/apis/beginTreeMatching";

export function useChatbotInitializer() {
  const dispatch = useDispatch();

  const fetchInitializeStep = async () => {
    try {
      return await beginTreeMatching();
    } catch (error) {
      // TODO: Add error handler
      console.error(error);
    }
  };

  const initializeChatbot = async () => {
    const initialStep = await fetchInitializeStep();
    if (initialStep) {
      dispatch(addStep(initialStep.question));
    }
  };

  return { initializeChatbot };
}
