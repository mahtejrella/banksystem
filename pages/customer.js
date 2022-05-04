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

export default function customer() {

  useEffect(() => {
    alert(localStorage.getItem("user"))
  }, [])

  const [numComponent, setnumComponent] = useState(0);
  return (
    <div>
      <NavBar/>
      <div className="flex">
        <div>
          <ProSidebar>
            <Menu  iconShape="square" popperArrow={true}>
              <MenuItem>
                <div className="m-auto text-lg font-bold"></div>
              </MenuItem>
              <MenuItem onClick={()=>{setnumComponent(0)}}>Home</MenuItem>
              <MenuItem onClick={()=>{setnumComponent(1)}}>Manage Accounts</MenuItem>
              <MenuItem onClick={()=>{setnumComponent(2)}}>Deposit / Withdrawal</MenuItem>
              <MenuItem onClick={()=>{setnumComponent(3)}}>Manage Overdraft</MenuItem>
              <MenuItem onClick={()=>{setnumComponent(4)}}>Make Transfer</MenuItem>
          </Menu>
          </ProSidebar>
        </div>
        <div className="w-full">
        
          <div className="w-full">
            <Head>
              <title>Banking System</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={numComponent===0?"w-full px-5 text-center h-screen":"hidden"}>
              <h1 className="text-5xl font-bold pt-10 w-full text-left">
                Customer Menu
              </h1>

              <p className="my-3 text-2xl w-full text-left">
                Choose one of the options to get started
              </p>

              <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(1)}}>
                    <p className="text-black text-2xl font-bold">Manage Accounts</p>
                    

                </div>
                <div className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(2)}}>
                    <p className="text-black text-2xl font-bold">Deposit / Withrawal</p>

                </div>
                <div className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(3)}}>
                    <p className="text-black text-2xl font-bold">Manage Overdraft</p>

                </div>
                <div className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(4)}}>
                    <p className="text-black text-2xl font-bold">Make Transfer</p>

                </div>
              </div>

              
            </main>

            <main className={numComponent===1?"w-full px-5 text-center min-h-screen":"hidden"}>
              <h1 className="text-5xl font-bold pt-10 w-full text-left">
                Manage Accounts
              </h1>
              <ManageAccounts/>
            </main>

            <main className={numComponent===2?"w-full px-5 text-center h-screen":"hidden"}>
              <h1 className="text-5xl font-bold pt-10 w-full text-left">
                Deposit / Withdrawal
              </h1>

              <p className="my-3 text-2xl w-full text-left">
                Choose one of the options to get started
              </p>

              <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(5)}}>
                    <p className="text-black text-2xl font-bold">Deposit</p>
                    

                </div>
                <div className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(6)}}>
                    <p className="text-black text-2xl font-bold">Withdrawal</p>

                </div>
              </div>

              
            </main>

            <main className={numComponent===3?"w-full px-5 text-center min-h-screen":"hidden"}>
              <h1 className="text-5xl font-bold pt-10 w-full text-left">
                Manage Overdraft
              </h1>
              <ManageOverdraft/>
            </main>

            <main className={numComponent===4?"w-full px-5 text-center min-h-screen":"hidden"}>
              <h1 className="text-5xl font-bold pt-10 w-full text-left">
                Make Transfer
              </h1>
              <MakeTransfer/>
            </main>

            <main className={numComponent===5?"w-full px-5 text-center min-h-screen":"hidden"}>
              <h1 className="text-5xl font-bold pt-10 w-full text-left">
                Deposit
              </h1>
              <Deposit/>
            </main>

            <main className={numComponent===6?"w-full px-5 text-center min-h-screen":"hidden"}>
              <h1 className="text-5xl font-bold pt-10 w-full text-left">
                Withdrawal
              </h1>
              <Withdraw/>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
