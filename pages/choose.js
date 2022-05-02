import {useState,useEffect} from 'react';
import Head from 'next/head'

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import ManageAccounts from '../components/customer/ManageAccounts';
import Deposit from '../components/customer/Deposit';
import Withdraw from '../components/customer/Withdraw';
import ManageOverdraft from '../components/customer/ManageOverdraft';
import MakeTransfer from '../components/customer/MakeTransfer';

import NavBar from '../components/NavBar';
import Link from "next/link"

export default function Choose() {
  const [numComponent, setnumComponent] = useState(0);
  return (
    <div>
      <NavBar/>
      <div className="flex">
        <div className="w-full">
        
          <div className="w-full">
            <Head>
              <title>Banking System</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={numComponent===0?"w-full px-5 text-center h-screen":"hidden"}>
              <h1 className="text-5xl font-bold pt-10 w-full text-left">
                Customer / Manager Menu
              </h1>

              <p className="my-3 text-2xl w-full text-left">
                Choose one of the options to get started
              </p>

              <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/customer">
                    <a className=" text-black text-2xl font-bold bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer">Customer</a>
                </Link>

                <Link href="/manager">
                    <a className=" text-black text-2xl font-bold bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer">Manager</a>
                </Link>
              </div>

            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
