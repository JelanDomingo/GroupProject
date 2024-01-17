import Link from 'next/link';

export default function FirstPost() {
  return (
    <>

<details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
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