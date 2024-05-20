import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <Link href="server" className={styles.description}>User(Server)</Link>
      <Link href="static" className={styles.description}>User(Static)</Link>
      <Link href="client" className={styles.description}>User(Client)</Link>
    </main>
  );
}
