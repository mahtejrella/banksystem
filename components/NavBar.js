import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

const NavBar = () => {

    const router = useRouter();

    const onSubmit=async(e)=>{
        localStorage.removeItem("user")
        router.push('/')
      }

    return (
        <header className="w-full bg-white p-4 flex justify-between items-center border-b-2 ">
        <nav className="flex items-center">
            <img className="w-10 h-10" src="/logo.png" />
            <div className="text-white text-xs hidden sm:block ml-2">
            <div className="text-2xl text-black font-bold">Georgia Tech Banking System</div>
            </div>
        </nav>
        <button onClick={onSubmit} className="bg-black hover:bg-yellow-500 hover:text-black text-white font-bold py-2 px-4 rounded">Logout</button>
        </header>
    )
}

export default NavBar
