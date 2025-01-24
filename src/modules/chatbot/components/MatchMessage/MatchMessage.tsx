import styles from "./MatchMessage.module.scss";
import { MessageBubble } from "../MessageBubble";
import type { Match } from "@/data/types/match";

interface Props {
  match: Match;
}

export function MatchMessage({ match }: Props) {
  return (
    <MessageBubble>
      <h6 className={styles.title}>
        {"Based on Your Answers, Here's Your Tree:"}
      </h6>
      <span className={styles.name}>{match.name}:</span>
      <span className={styles.description}>{match.description}</span>
    </MessageBubble>
  );
}
