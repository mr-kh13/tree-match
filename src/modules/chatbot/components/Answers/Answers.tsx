import styles from "./Answers.module.scss";
import { AnswerItem } from "../AnswerItem";

export default function Answers() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Answer to Find Your Tree:</p>
      <div className={styles.answersWrapper}>
        <AnswerItem onClick={() => console.log("answer clicked!")}>
          courtyard
        </AnswerItem>
      </div>
    </div>
  );
}
