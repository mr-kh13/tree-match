import { Header } from "@/shared/components/Header";
import styles from "./page.module.scss";
import { MessageBubble } from "@/modules/chatbot/components/MessageBubble";
import Answers from "@/modules/chatbot/components/Answers/Answers";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <MessageBubble>
          Do you have a courtyard, garden, or a farm?
        </MessageBubble>
      </main>
      <Answers />
    </>
  );
}
