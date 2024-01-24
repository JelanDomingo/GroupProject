import Link from 'next/link';
export default function Page() {
    return(
        <>
        <h1>The thing</h1>
        <button className = "btn btn-active bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            <Link href="/edits/landing">Back</Link>
        </button>
        
        </>
    );
}