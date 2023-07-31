import React from 'react';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

type Props = {};

const Container = (props: Props) => {
  return (
    <div className="lg:pt-16 pt-4 relative w-10/12 mx-auto" id='container'>
      <div className='md:flex items-center justify-between flex-row-reverse'>
        <div className='flex justify-end items-end max-md:pt-2'>
        <div className='relative'>
  <img className='pr-16 max-w-[300px] md:max-w-100 transform -translate-x-10 ' src="tera.png" />
</div>

        </div>
        <div className='p-2 pl-0 mt-5 sm:mt-20'>
          <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl'>Hello</p>
          <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl pt-2 lg:pt-6'>I&apos;m Tera<p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4'>A Student from SMK TI Bali Global Denpasar</p></h1>
        </div>
      </div>
      <div className='flex grid-cols-2 gap-2'>
        <div className='mt-[-20px]'>
          <a href='https://github.com/Tera24'><AiFillGithub className='w-8 h-8'/></a>
        </div>
        <div className='mt-[-20px]'>
          <a href='https://instagram.com/depeera89?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'> <AiOutlineInstagram className='w-8 h-8'/></a>
        </div>
      </div>
    </div>
  );
}

export default Container;