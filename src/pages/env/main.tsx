import Link from "next/link";

type MyPageProps = {
  formattedDate: string;
}

export default function MyPage({ formattedDate }: MyPageProps) {
  return (
    <>
      <h1>Server-side rendered page</h1>
      <p>
        This page is server-side rendered. It was rendered on {formattedDate}.
      </p>
      <p>
        <Link href="/">View a static page.</Link>
      </p>
    </>
  );
}