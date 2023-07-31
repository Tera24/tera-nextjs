import Image from 'next/image';
import Navbar from './Navbar'
import Container from './Container'
import Identity from './Identity';
import Skills from './Skills';
import School from './School'
import SignUpForm from './SignUpForm';
import Link from 'next/link';
import { BsArrowUpSquareFill } from 'react-icons/bs'


export default function Home() {
  return (
    <div className='max-w-full'>
      <div className='w-10/12 mx-auto pt-4 mt-5'>
        <Navbar/></div>
        <div id='identity' className=' mx-auto max-md:mt-[20px] mt-16'>
      <Container/></div>
      <div id='identity' className=' mx-auto max-md:mt-[50px] mt-20'> <br/>
      <Identity/></div>
      <div id='skills' className=' mx-auto max-md:mt-[10px] mt-20 mb-[-20px]'>
      <Skills/></div>
      <div id='school' className=' mx-auto max-md:mt-[30px] mt-20'>
      <School/></div>
      <div id='signupform' className=' mx-auto max-md:mt-[30px] mt-20'>
      <SignUpForm/></div>
      <div className='w-10/12 mx-auto my-10'>
      <div className='flex items-start text-2xl text-neutral-300 ml-2 justify-between'> <p>Ida Bagus Mahatera Baba</p>
          <a href='#navbar'><BsArrowUpSquareFill/></a>
          
          </div> 
        </div>
      </div>
  )
}
