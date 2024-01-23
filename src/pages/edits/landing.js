import Link from 'next/link';

export default function FirstPost() {
  return (
    <>

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://fishsubsidy.org/wp-content/uploads/2020/02/sea-turtle.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      <h1>Sighting Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h3>
        Big Island
      </h3>
      <h2>
        <button>
        <Link href="/edits/jelingling">Jelan</Link>
        </button>
      </h2>
      <h2>
        <Link href="/edits/logan">Logan</Link>
      </h2>
      
    </>
  );
}