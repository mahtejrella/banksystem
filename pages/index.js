import {useState} from 'react';
import Head from 'next/head'

import 'react-pro-sidebar/dist/css/styles.css';


export default function Home() {
  const [numComponent, setnumComponent] = useState(0);
  return (
    <div className="flex">
      <div className="w-full">
        <div className="w-full">
          <Head>
            <title>Dashboard - Basel Practitioners</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={numComponent===0?"w-full px-5 text-center h-screen":"hidden"}>
            <h1 className="text-6xl font-bold pt-10 w-full text-left">
              Welcome to <span className="text-red-800">BPPL Smart App </span>
            </h1>

            <div className="mt-10 w-110 grid lg:grid-cols-3 ">
              <div className="bg-gray-100 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(1)}}>
                  <p className="text-red-800 text-2xl font-bold">Credit Risk</p>
                  <p className="text-black pt-5 text-lg font-thin">Get started with the Credit Risk framework here</p>

              </div>
              <div className="bg-gray-100 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(2)}}>
                  <p className="text-red-800 text-2xl font-bold">Counterparty Risk (SACCR)</p>
                  <p className="text-black pt-5 text-lg font-thin">Get started with the Counterparty Risk framework here</p>

              </div>
              <div className="bg-gray-100 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(3)}}>
                  <p className="text-red-800 text-2xl font-bold">Market Risk</p>
                  <p className="text-black pt-5 text-lg font-thin">Get started with the Market Risk framework here</p>

              </div>
              <div className="bg-gray-100 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(4)}}>
                  <p className="text-red-800 text-2xl font-bold">Operational Risk</p>
                  <p className="text-black pt-5 text-lg font-thin">Get started with the Operational Risk framework here</p>

              </div>
              <div className="bg-gray-100 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer" onClick={()=>{setnumComponent(5)}}>
                  <p className="text-red-800 text-2xl font-bold">Liquidity Risk</p>
                  <p className="text-black pt-5 text-lg font-thin">Get started with the Liquidity Risk framework here</p>

              </div>
            </div>

            
          </main>

          <main className={numComponent===1?"w-full px-5 text-center min-h-screen":"hidden"}>

          </main>

          <main className={numComponent===2?"w-full px-5 text-center min-h-screen":"hidden"}>
           
          </main>

          <main className={numComponent===3?"w-full px-5 text-center min-h-screen":"hidden"}>
            
          </main>

          <main className={numComponent===4?"w-full px-5 text-center min-h-screen":"hidden"}>
            
          </main>
          
          <main className={numComponent===5?"w-full px-5 text-center min-h-screen":"hidden"}>
            
          </main>

      </div>
      </div>
    </div>
  )
}
