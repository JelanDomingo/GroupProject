import Link from 'next/link';
export default function Page() {
    return(
        <>
        <h1>Logan's Page</h1>
        <h2>
        <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href="/">Back to home</Link>
        </button>
        </h2>
        <Link
              className="flex max-w-xs flex-col gap-10 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/edits/landing"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Sighting? →</h3>
              <div className="text-lg">
                le animal is not in any danger
              </div>
            </Link>

        
        </>
    );
}