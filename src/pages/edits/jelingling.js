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
          <label className="form-control w-full max-w-xs">
            <div className="label">
            <span className="label-text">Choose which island</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>Pick Island</option>
            <option>Big Island</option>
            <option>Kaua'i</option>
            <option>Lana'i</option>
            <option>Maui</option>
            <option>Moloka'i</option>
            <option>O'ahu</option>
        </select>
      </label>
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