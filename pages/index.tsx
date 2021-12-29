import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MyBlog | Home</title>
      </Head>

      <main className="h-full flex flex-grow flex-col justify-center gap-8">
        <div className="max-w-2xl flex flex-col gap-4">
          <h2 className="text-2xl">Hey, Welcome! 👋</h2>

          <h1 className="text-6xl font-black">
            News about the <span className="text-secondary">Programming </span>
            world.
          </h1>

          <h2 className="font-bold text-2xl">Get access to all publications</h2>

          <Link href="/">
            <a>
              <button className="border-2 border-secondary bg-secondary py-3 px-8 font-bold rounded-3xl hover:brightness-110 transition">
                Sign in now
              </button>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
