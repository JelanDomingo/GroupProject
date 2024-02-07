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
          <h3 className="text-5x1 font-extrabold tracking-tight text-white sm:text -[5rem]">
            Welcome to the Sighting Page! Select the island from the following dropdown
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <details className="dropdown">
            <summary className="m-1 btn text-5x1 tracking-tight text-white sm:text">Select your Island</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li><a><Link 
              className="flex max-w-xs flex-col gap-10 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href = "/edits/islands/big_island">Big Island</Link></a></li>
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