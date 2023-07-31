import React from 'react'
import {MdOutlineDriveFileRenameOutline} from "react-icons/md"
import {BsFillHouseFill} from "react-icons/bs"
import {BiCake} from "react-icons/bi"
import {CgMail} from "react-icons/cg"

type Props = {}

const Identity = (props: Props) => {
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>About Me</h1>
        <p className='mt-4 text-sm'>Hello, my name is Tera, I'm a student from SMK Ti Bali Global Denpasar,  I started learning programming languages 1 year ago, but I'm not good at mastering various languages, I can do basic C++, CSS, NextJS, Tailwindcss, and  HTML.</p>
        <div className='mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10'>
            <a className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <MdOutlineDriveFileRenameOutline className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' size={80}/>
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>name</h1>
                    <p className='text-neutral-400'>My Name is Ida Bagus Mahatera Baba</p>
                </div>
            </a>
            <a className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <BsFillHouseFill className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' size={80}/>
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Address</h1>
                    <p className='text-neutral-400'>My Address is at Jl. Tukad Irawadi GG 12 No 2</p>
                </div>
            </a>
            <a className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <BiCake className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' size={80}/>
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Birth Date</h1>
                    <p className='text-neutral-400'>My Birthday is on August/18/2006</p>
                </div>
            </a>
            <a className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <CgMail className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125'size={80}/>
                </div>
                <div className=' p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Email</h1>
                    <p className='text-neutral-400'>Contact me at @teradaring.com</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Identity