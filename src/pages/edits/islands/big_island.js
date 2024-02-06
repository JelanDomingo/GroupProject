import React from 'react';
import Link from 'next/link';
export default function Page() {
    return(
        <>
        <h1>The thing</h1>
        <h2>
            <Link href="/edits/jelingling">Back</Link>
        </h2>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6fa8dc] to-[#0b5394]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Big Island
          </h1>
          <button className="btn btn-neutral rounded">
            <Link href="/edits/logan">
            Next</Link>
          </button>
        </div>
      </main>
        </>
    );
}