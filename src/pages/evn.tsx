import Link from "next/link";

type SSRProps = {
  formattedDate: string;
}

export default function SSR({ formattedDate }: SSRProps) {
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

export async function getStaticProps() {
  const enviroment = process.env.ENV;

  if (enviroment !== 'SIT') {
    return {
      props: {}
    }
  }

  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate, enviroment } };
}

export async function getServerSideProps() {
  const enviroment = process.env.ENV;

  if (enviroment !== 'PROD') {
    return {
      props: {}
    }
  }


  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);
  console.log(
    `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
  );
  return { props: { formattedDate } };
}