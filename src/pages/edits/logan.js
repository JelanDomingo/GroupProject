import Link from 'next/link';
export default function Page() {
    return(
        <>
        <h1>Emergency</h1>
        <h2>
          <Link href="/edits/jelingling">Back</Link>
        </h2>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6fa8dc] to-[#0b5394]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Emergency Details
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What Happened?</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>Pick Emergency</option>
            <option>Injury</option>
            <option>Caught in Reef</option>
            <option>Oil?</option>
            <option>Other</option> {/*Maybe add a text thing to specify what they mean by other*/}
          </select>
        </label>
          </div>

          <div>
          <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Where? List beach, town, street, etc</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          
          <button className="btn glass">
            <Link href="/edits/emergency.html">
            Next</Link>
          </button>
          </label>
          </div>
          </div>
      </main>
        </>
    );
}