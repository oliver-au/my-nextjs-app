import Link from "next/link";

type HomeProps = {
  formattedDate: string;
  enviroment: string;
}

export default function Home({ formattedDate, enviroment }: HomeProps) {
  return (
    <>
      <h1>Static page</h1>
      <p>Env: {enviroment}</p>
      <p>This page is static. It was built on {formattedDate}.</p>
      <p>
        <Link href="/ssr">View a server-side rendered page.</Link>
      </p>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);
  const enviroment = ''
  return { props: { formattedDate, enviroment } };
}