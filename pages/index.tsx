import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grocery Plus</title>
        <meta
          name="description"
          content="Grocery plus developed at Axelerant"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center py-16 text-3xl">Welcome to Grocery Plus!</h1>
    </div>
  );
}
