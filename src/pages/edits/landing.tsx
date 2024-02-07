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
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">IHATESEATURTS</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>
            Menu
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a><Link href="/edits/landing">Home</Link></a></li>
            <li><a><Link href="/edits/sighting_landing">Report a sighting!</Link></a></li>
            <li><a><Link href="/edits/abtus">About Us!</Link></a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
      </h1>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6fa8dc] to-[#0b5394]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            I HATE SEA TURTLES
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
              className="flex max-w-xs flex-col gap-10 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/edits/sighting_landing"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Sighting? →</h3>
              <div className="text-lg">
                le animal is not in any danger
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-10 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/edits/emergency_landing"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Emergency? →</h3>
              <div className="text-lg">
                le animal is in mucho danger
              </div>
            </Link>
          </div>
          
        </div>
          

      </main>
    </>
  );
  
  }

