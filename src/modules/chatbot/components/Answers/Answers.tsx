"use client";
import styles from "./Answers.module.scss";
import { AnswerItem } from "../AnswerItem";
import { useSelector } from "react-redux";
import {
  selectCurrentStepAnswers,
  selectIsMatchFound,
} from "@/modules/chatbot/chatbotSlice";
import type { Answer } from "@/data/types/answer";
import { Button } from "@/shared/components/Button";
import { useChatbot } from "../../hooks/useChatBot";

export default function Answers() {
  const answers = useSelector(selectCurrentStepAnswers);
  const isMatchFound = useSelector(selectIsMatchFound);
  const { handleSubmitAnswer, restartChatbot } = useChatbot();

  const handleAnswerClick = async (answer: Answer) => {
    handleSubmitAnswer(answer);
  };

  const handleStartOverClick = () => {
    restartChatbot();
  };

  if (isMatchFound) {
    return (
      <div className={styles.container}>
        <div className={styles.answersWrapper}>
          <Button
            fullWidth
            color="primary"
            size="lg"
            onClick={handleStartOverClick}
          >
            Start Over
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Answer to Find Your Tree:</p>
      <div className={styles.answersWrapper}>
        {answers.map((answer) => {
          return (
            <AnswerItem key={answer} onClick={() => handleAnswerClick(answer)}>
              {answer}
            </AnswerItem>
          );
        })}
      </div>
    </div>
  );
}
