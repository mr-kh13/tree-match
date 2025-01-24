import { Header } from "@/shared/components/Header";
import styles from "./page.module.scss";
import Answers from "@/modules/chatbot/components/Answers/Answers";
import { beginTreeMatching } from "@/data/apis/beginTreeMatching";
import { Messages } from "@/modules/chatbot/components/Messages";
import { Container } from "@/shared/components/Container";

export default async function Home() {
  const initialStep = await beginTreeMatching();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container>
          <Messages initialStep={initialStep} />
        </Container>
      </main>
      <Container>
        <Answers />
      </Container>
    </>
  );
}
