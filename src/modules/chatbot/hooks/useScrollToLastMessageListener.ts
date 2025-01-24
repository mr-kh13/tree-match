import { useEffect, useRef } from "react";
import { selectMatch, selectSteps } from "../chatbotSlice";
import { useSelector } from "react-redux";

export function useScrollToLastMessageListener() {
  const stepsEndRef = useRef<HTMLDivElement>(null);
  const steps = useSelector(selectSteps);
  const match = useSelector(selectMatch);

  useEffect(() => {
    if (stepsEndRef.current) {
      stepsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [steps, match]);

  return { stepsEndRef };
}
