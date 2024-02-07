
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";


export default function ABTUS() {  const hello = api.post.hello.useQuery({ text: "from tRPC" });

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
            <li><a><Link href="/edits/jelingling">Report a sighting!</Link></a></li>
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

        </div>
          

      </main>
    </>
  );
  
  }

