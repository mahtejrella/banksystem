import {useState} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

import 'react-pro-sidebar/dist/css/styles.css';

export default function admin() {
  const [numComponent, setnumComponent] = useState(0);
  const router = useRouter();
  return (
    <div className="flex">
    <div className="w-full">
      <div className="w-full">
        <Head>
          <title>Admin</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={numComponent===0?"w-full px-5 text-center h-screen":"hidden"}>
          <h1 className="text-3xl font-bold pt-10 w-full text-center">
            Admin Menu
          </h1>

          <div className="flex-1 mt-16 w-110 grid lg:grid-cols-3">
           <div className="p-5 m-7 transform hover:scale-110 transition ease-in"></div>

            <div className="bg-black rounded-xl p-5 m-7 border transform transition ease-in cursor-pointer" onClick={()=>{router.push("admin/viewstats")}}>
                <p className="text-white text-xl font-bold">View Stats</p>
            </div>

            <div className="p-5 m-7 transform hover:scale-110 transition ease-in"></div>
          </div>

          <div className="mt-2 w-110 grid lg:grid-cols-2">

            <div className="bg-black rounded-xl p-5 m-7 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{router.push("admin/createcorporation")}}>
                <p className="text-white text-xl font-bold">Create Corporation</p>
            </div>

            <div className="bg-black rounded-xl p-5 m-7 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{router.push("admin/createfee")}}>
                <p className="text-white text-xl font-bold">Create Fee</p>
            </div>

            <div className="bg-black rounded-xl p-5 m-7 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{router.push("admin/manageusers")}}>
                <p className="text-white text-xl font-bold">Manage Users</p>
            </div>

            <div className="bg-black rounded-xl p-5 m-7 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{router.push("admin/manageoverdraft")}}>
                <p className="text-white text-xl font-bold">Manage Overdraft</p>
            </div>

            <div className="bg-black rounded-xl p-5 m-7 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{router.push("admin/hireworker")}}>
                <p className="text-white text-xl font-bold">Hire Worker</p>
            </div>

            <div className="bg-black rounded-xl p-5 m-7 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{router.push("admin/payemployees")}}>
                <p className="text-white text-xl font-bold">Pay Employees</p>
            </div>

            <div className="bg-black rounded-xl p-5 m-7 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{router.push("admin/replacemanager")}}>
                <p className="text-white text-xl font-bold">Replace Manager</p>
            </div>

            <div className="bg-black rounded-xl p-5 m-7 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{router.push("admin/manageaccounts")}}>
                <p className="text-white text-xl font-bold">Manage Accounts</p>
            </div>

          </div>

          
        </main>
    </div>
    </div>
  </div>
  )
}
