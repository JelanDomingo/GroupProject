import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Sighting Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h3>
        Big Island
      </h3>
      <h3>
        Oahu
      </h3>
    </>
  );
}