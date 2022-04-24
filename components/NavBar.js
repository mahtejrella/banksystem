import React from 'react'
import { Button } from 'reactstrap'
const NavBar = () => {
    return (
        <header className="w-full bg-white p-4 flex justify-between items-center border-b-2 ">
        <nav className="flex items-center">
            <img className="w-10 h-10" src="/logo.png" />
            <div className="text-white text-xs hidden sm:block ml-2">
            <div className="text-2xl text-black font-bold">Georgia Tech Banking System</div>
            </div>
        </nav>
        <div className="w-8 h-8 cursor-pointer pr-16">
            <p className="text-lg">Login</p>
        </div>
        </header>
    )
}

export default NavBar
