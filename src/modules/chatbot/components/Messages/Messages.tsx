"use client";
import { useSelector } from "react-redux";
import { selectMatch, selectSteps } from "../../chatbotSlice";
import { FirstStepResult } from "@/data/apis/beginTreeMatching";
import { MessageBubble } from "../MessageBubble";
import styles from "./Messages.module.scss";
import dynamic from "next/dynamic";
import { useScrollToLastMessageListener } from "../../hooks/useScrollToLastMessageListener";
import { useChatbotInitializerListener } from "../../hooks/useChatbotInitializerListener";

const MatchMessage = dynamic(() =>
  import("../MatchMessage").then((res) => res.MatchMessage)
);

interface Props {
  initialStep: FirstStepResult;
}

export function Messages({ initialStep }: Props) {
  const steps = useSelector(selectSteps);
  const match = useSelector(selectMatch);

  useChatbotInitializerListener(initialStep);
  const { stepsEndRef } = useScrollToLastMessageListener();

  return (
    <div className={styles.stepsWrapper}>
      {steps.map((step) => {
        return (
          <>
            <MessageBubble key={step.step_id + step.question}>
              {step.question}
            </MessageBubble>
            {step.selectedAnswer && (
              <MessageBubble key={step.step_id + step.selectedAnswer} answer>
                {step.selectedAnswer}
              </MessageBubble>
            )}
          </>
        );
      })}
      {match && <MatchMessage match={match} />}
      <div ref={stepsEndRef} />
    </div>
  );
}
