import React from 'react'
import { Button } from 'reactstrap'
import Link from "next/link"

const NavBar = () => {
    return (
        <header className="w-full bg-white p-4 flex justify-between items-center border-b-2 ">
        <nav className="flex items-center">
            <img className="w-10 h-10" src="/logo.png" />
            <div className="text-white text-xs hidden sm:block ml-2">
            <div className="text-2xl text-black font-bold">Georgia Tech Banking System</div>
            </div>
        </nav>
        <Link href="/admin">
          <a>Login</a>
        </Link>
        </header>
    )
}

export default NavBar
