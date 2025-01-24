import { Header } from "@/shared/components/Header";
import styles from "./page.module.scss";
import Answers from "@/modules/chatbot/components/Answers/Answers";
import { beginTreeMatching } from "@/data/apis/beginTreeMatching";
import { Messages } from "@/modules/chatbot/components/Messages";

export default async function Home() {
  const initialStep = await beginTreeMatching();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Messages initialStep={initialStep} />
      </main>
      <Answers />
    </>
  );
}
