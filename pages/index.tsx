import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <Head>
        <title>Grocery Plus</title>
        <meta
          name="description"
          content="Grocery plus developed at Axelerant"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center py-16 text-3xl">Welcome to Grocery Plus!</h1>
      <h1 className="text-2xl">
        <Link href="/users">Users</Link>
      </h1>
      <h1 className="text-2xl">
        <Link href="/categories">Categories</Link>
      </h1>
      <h1 className="text-2xl">
        <Link href="/groceries">Groceries</Link>
      </h1>
    </div>
  );
}
