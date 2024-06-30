import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/auth">
        <h1>회원가입</h1>
      </Link>
    </>
  );
}
