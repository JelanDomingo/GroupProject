import Link from 'next/link';
export default function Page() {
    return(
        <>
        <h1>Logan's Page</h1>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6fa8dc] to-[#0b5394]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            I HATE SEA TURTLES
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
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
          </div>
          
        </div>
      </main>

        
        </>
    );
}