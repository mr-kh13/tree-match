import { useDispatch } from "react-redux";
import { useChatbotInitializer } from "./useChatbotInitializer";
import { useSubmitAnswer } from "./useSubmitAnswer";
import { resetChatbot } from "../chatbotSlice";

export function useChatbot() {
  const { handleSubmitAnswer } = useSubmitAnswer();
  const { initializeChatbot } = useChatbotInitializer();
  const dispatch = useDispatch();

  const restartChatbot = async () => {
    try {
      dispatch(resetChatbot());
      await initializeChatbot();
    } catch (error) {
      // TODO: Add error handler
      console.error(error);
    }
  };

  return { handleSubmitAnswer, initializeChatbot, restartChatbot };
}
