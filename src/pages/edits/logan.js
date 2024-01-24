import Link from 'next/link';
export default function Page() {
    return(
        <>
        <h1>Logan's Page</h1>
        <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href="/edits/landing">Back</Link>
        </button>
        
        </>
    );
}