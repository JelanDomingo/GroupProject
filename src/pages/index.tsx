import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>PROJECT</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            I HATE SEA TURTLES
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/edits/landing"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Sighting? →</h3>
              <div className="text-lg">
                le animal is not in any danger
              </div>
            </Link>
          </div>
          
        </div>
      </main>
    </>
  );
  
  }

