import {useState,useEffect} from 'react';
import Head from 'next/head'

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


export default function manager() {
  const [numComponent, setnumComponent] = useState(0);
  return (
    <div className="flex">
      <div>
        <ProSidebar>
          <Menu  iconShape="square" popperArrow={true}>
            <MenuItem>
              <div className="m-auto text-lg font-bold"></div>
            </MenuItem>
            <MenuItem onClick={()=>{setnumComponent(0)}}>Home</MenuItem>
            <MenuItem onClick={()=>{setnumComponent(1)}}>Pay Employee</MenuItem>
            <MenuItem onClick={()=>{setnumComponent(2)}}>Hire Worker</MenuItem>
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
              Manager Menu
            </h1>

            <p className="my-3 text-2xl w-full text-left">
              Choose one of the options to get started
            </p>

            <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(1)}}>
                  <p className="text-black text-2xl font-bold">Pay Employee</p>
                  

              </div>
              <div className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(2)}}>
                  <p className="text-black text-2xl font-bold">Hire Worker</p>

              </div>
            </div>
          </main>


          <main className={numComponent===1?"w-full px-5 text-center h-screen":"hidden"}>
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Pay Employee
            </h1>

            <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(3)}}>
                  <p className="text-black text-2xl font-bold">Pay all employees</p>
                  

              </div>
            </div>

            
          </main>

          <main className={numComponent===2?"w-full px-5 text-center min-h-screen":"hidden"}>
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Hire Worker
            </h1>
          </main>

          <main className={numComponent===3?"w-full px-5 text-center min-h-screen":"hidden"}>
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Pay All Employees
            </h1>
          </main>
        </div>
      </div>
    </div>
  )
}
