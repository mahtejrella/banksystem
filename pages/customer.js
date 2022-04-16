import {useState} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

import 'react-pro-sidebar/dist/css/styles.css';

export default function customer() {
  const [numComponent, setnumComponent] = useState(0);
  const router = useRouter();
  return (
    <div className="flex">
    <div className="w-full">
      <div className="w-full">
        <Head>
          <title>Customer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={numComponent===0?"w-full px-5 text-center h-screen":"hidden"}>
          <h1 className="text-3xl font-bold pt-10 w-full text-center">
            Customer Menu
          </h1>

          <div className="flex-1 mt-16 w-110 grid lg:grid-cols-3">
           <div className="p-5 m-7 transform hover:scale-110 transition ease-in"></div>

            <div className="bg-black rounded-xl p-5 m-7 border transform transition ease-in cursor-pointer" onClick={()=>{router.push("customer/manageaccounts")}}>
                <p className="text-white text-xl font-bold">Manage Accounts</p>
            </div>

            <div className="p-5 m-7 transform hover:scale-110 transition ease-in"></div>
            <div className="p-5 m-7 transform hover:scale-110 transition ease-in"></div>

            <div className="bg-black rounded-xl p-5 m-7 border transform transition ease-in cursor-pointer" onClick={()=>{router.push("customer/depositwithdrawal")}}>
                <p className="text-white text-xl font-bold">Deposit / Withdrawal</p>
            </div>

            <div className="p-5 m-7 transform hover:scale-110 transition ease-in"></div>
            <div className="p-5 m-7 transform hover:scale-110 transition ease-in"></div>

            <div className="bg-black rounded-xl p-5 m-7 border transform transition ease-in cursor-pointer" onClick={()=>{router.push("customer/manageoverdraft")}}>
                <p className="text-white text-xl font-bold">Manage Overdraft</p>
            </div>

            <div className="p-5 m-7 transform hover:scale-110 transition ease-in"></div>
            <div className="p-5 m-7 transform hover:scale-110 transition ease-in"></div>

            <div className="bg-black rounded-xl p-5 m-7 border transform transition ease-in cursor-pointer" onClick={()=>{router.push("customer/maketransfer")}}>
                <p className="text-white text-xl font-bold">Make Transfer</p>
            </div>
          </div>
        </main>
    </div>
    </div>
  </div>
  )
}
