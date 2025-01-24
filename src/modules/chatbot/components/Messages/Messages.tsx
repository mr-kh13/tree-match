"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStep, selectMatch, selectSteps } from "../../chatbotSlice";
import { FirstStepResult } from "@/data/apis/beginTreeMatching";
import { MessageBubble } from "../MessageBubble";
import styles from "./Messages.module.scss";
import { MatchMessage } from "../MatchMessage";

interface Props {
  initialStep: FirstStepResult;
}

export function Messages({ initialStep }: Props) {
  const dispatch = useDispatch();
  const steps = useSelector(selectSteps);
  const match = useSelector(selectMatch);

  useEffect(() => {
    dispatch(addStep(initialStep.question));
  }, []);

  return (
    <div className={styles.questionsWrapper}>
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
    </div>
  );
}
