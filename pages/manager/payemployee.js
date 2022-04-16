import {useState} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

import 'react-pro-sidebar/dist/css/styles.css';

export default function payemployee() {
  const [numComponent, setnumComponent] = useState(0);
  const router = useRouter();
  return (
    <div className="flex">
    <div className="w-full">
      <div className="w-full">
        <Head>
          <title>Pay Employee</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={numComponent===0?"w-full px-5 text-center h-screen":"hidden"}>
          <h1 className="text-3xl font-bold pt-10 w-full text-center">
            Pay Employee
          </h1>

          <div className="flex-1 mt-16 w-110 grid lg:grid-cols-3">
           <div className="p-5 m-7 transform hover:scale-110 transition ease-in"></div>

            <div className="bg-black rounded-xl p-5 m-7 border transform transition ease-in cursor-pointer" onClick={()=>{router.push("payemployee/payall")}}>
                <p className="text-white text-xl font-bold">Pay all employees</p>
            </div>
          </div>
        </main>
    </div>
    </div>
  </div>
  )
}
