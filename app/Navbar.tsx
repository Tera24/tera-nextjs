'use client'
import React, { useState } from 'react'
import {RxHamburgerMenu} from "react-icons/rx"

type Props = {}

const Navbar = (props: Props) => {
    const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <div className='flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500' id='navbar'>
        <div className='sm:text-3xl text-xl font-bold inline-block'><a href="/" className='inline-block'>Tera</a></div>
        <div className='sm:hidden' onClick={() => setShowNav(!showNav)}><RxHamburgerMenu size={24}/></div>
        <nav className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 ${showNav ? "top-10 visible": "max-sm:invisible top-10"}`}>
            <ul className='flex items-center max-sm:text-sm justify-between max-sm:justify-around'>
                <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${showNav ? "max-sm:translate-x-0":"max-sm:-translate-x-20"}`}><a href='#signupform' className='px-2'>Go Down</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar