import Link from 'next/link';
export default function Page() {
    return(
        <>
        <h1>The thing</h1>
        <button className = "btn btn-active btn-primary">
            <Link href="/edits/landing">Back</Link>
        </button>
        
        </>
    );
}