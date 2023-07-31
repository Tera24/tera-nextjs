import React from 'react'
import link from 'next/link'
import {BiLogoTailwindCss, BiLogoCss3, BiLogoCPlusPlus} from "react-icons/bi"
import { AiFillHtml5 } from'react-icons/ai';
import { TbBrandNextjs } from 'react-icons/tb';


type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold mb-10'>Skills</h1>
        <div className='flex max-md:flex-wrap gap-7 justify-between'>
            <div className='d p-[62px] relative overflow-hidden mt-5 h-40'>
                <h1 className='text-center mt-[-2px]'>HTML</h1>
                <div className='flex justify-center mt-4'>
                    <AiFillHtml5 className='text-red-600' size={28}/>
                </div>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[80px] z-[-2] blur-[50px] left-[48%] bg-red-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
            <div className='d p-[58px] relativ overflow-hidden  mt-5 h-40'>
                <h1 className='text-center mt-1'>NextJs</h1>
                <div className='flex justify-center mt-3'>
                    <TbBrandNextjs className='text-black-600' size={28}/>
                </div>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-gray-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
            <div className='d p-[68px] relativ overflow-hidden  mt-5 h-40'>
                <h1 className='text-center mt-[-10px] pb-3'>CSS</h1>
                <div className='flex justify-center mb-5'>
                    <BiLogoCss3 className='text-blue-500' size={28}/>
                </div>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[20px] z-[-2] blur-[50px] left-[48%] bg-blue-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
            <div className='d p-[35px] relativ overflow-hidden  mt-5 h-40'>
                <h1 className='text-center mt-6'>Tailwindcss</h1>
                <div className='flex justify-center mt-3'>
                    <BiLogoTailwindCss className='text-cyan-500' size={28}/>
                </div>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[20px] z-[-2] blur-[50px] left-[48%] bg-cyan-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
            <div className='d p-[70px] relativ overflow-hidden  mt-5 h-40'>
                <h1 className='text-center mt-[-15px] '>C++</h1>
                <div className='flex justify-center mt-4'>
                    <BiLogoCPlusPlus className='text-blue-500' size={28}/>
                </div>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[20px] z-[-2] blur-[50px] left-[48%] bg-blue-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
        </div>
    </div>
  )
}

export default Skills