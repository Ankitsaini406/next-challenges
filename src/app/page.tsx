import Link from "next/link";

export default function Home() {
  return (
    <main >
      <h1>Home Page</h1>
      <Link href="server">User(Server)</Link>
      <Link href="static">User(Static)</Link>
      <Link href="client">User(Client)</Link>
    </main>
  );
}
