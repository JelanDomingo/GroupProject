import Link from 'next/link';
export default function Page() {
    return(
        <>
        <h1>The thing</h1>
        <h2>
            <Link href="/edits/landing">Back</Link>
        </h2>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6fa8dc] to-[#0b5394]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Sighting
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <details className="dropdown">
            <summary className="m-1 btn">open or close</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li><a><Link href = "/edits/islands/big_island">Big Island</Link></a></li>
              <li><a>Maui</a></li>
              <li><a>O'ahu</a></li>
              <li><a>Kauai</a></li>
              <li><a>Lanai</a></li>
              <li><a>Moloka'i</a></li>
            </ul>
          </details>
          </div>
          <button className="btn glass">
            <Link href="/edits/logan">
            Next</Link>
          </button>
        </div>
      </main>
        </>
    );
}