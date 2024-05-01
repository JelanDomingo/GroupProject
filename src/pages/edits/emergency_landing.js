import Head from "next/head";
import Link from "next/link";
import { data } from "tailwindcss/defaultTheme";

import { api } from "~/utils/api";
//import {main} from 'server';
export default function Page() {
  const data = api.post.getLatest.useQuery().data;
  //main()
    return(
        <>
        <h1>Emergency</h1>
        <h2>
          <Link href="/edits/landing">Back</Link>
        </h2>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6fa8dc] to-[#0b5394]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Logan's Page
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What Happened?</span>
          </div>
          {/*CHANGE THIS LATER, JUST TRYNA SEE HOW MONGO WORKS WITH A DROPDOWN*/}
          <select className="select select-bordered">
            <option disabled selected>What Beach?</option>
            <option><div className="overflow-x-auto relative h-screen font-mhs text-white">
              <table className="wfull">
              <tbody className=" ">
                  {data?.map(({id, email, content}) => (
                    <tr key={id} className="border-b-2">
                      <td className="w2/12">
                        {content}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </option>
            <option>Caught in Reef</option>
            <option>Oil?</option>
            <option>Other</option> {/*Maybe add a text thing to specify what they mean by other*/}
          </select>
          {/*TEST END*/}
        </label>
          </div>
          <table>
                <tr>
                  <td>{data?.map(({content}) => (content == "Kapiolani Beach Park") ? (<div>{content}</div>): (<div></div>))}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Content</td>
                  <td>Email</td>
                </tr>
          </table>
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