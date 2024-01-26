import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
/*export default function FirstPost() {
  return (
    <>

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://fishsubsidy.org/wp-content/uploads/2020/02/sea-turtle.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      <h1>Sighting Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h3>
        Big Island
      </h3>
      <h2>
        <button>
        <Link href="/edits/jelingling">Jelan</Link>
        </button>
      </h2>
      <h2>
        <Link href="/edits/logan">Logan</Link>
      </h2>
      
    </>
  );
}*/

export default function FirstPost() {  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <h1>
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      <Link href="/edits/landing"></Link>
      </svg>

    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <Link href="/edits/jelingling"></Link>
    </a>
  </li>
</ul>
      </h1>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6fa8dc] to-[#0b5394]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            I HATE SEA TURTLES
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
              className="flex max-w-xs flex-col gap-10 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/edits/jelingling"
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

