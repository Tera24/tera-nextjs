import React from 'react'

type Props = {}

const School = (props: Props) => {
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>Educational Background</h1>
        <p className='ml-1 mt-4 text-md'>I've been school in here</p>
        <div className='mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10'>
            </div>
            <div className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>SDN 3 Panjer</h1>
                    <p className='text-neutral-400'>2013 - 2019</p>
                </div>
            </div>
            <div className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>SMP Nasional Denpasar</h1>
                    <p className='text-neutral-400'>2019 - 2022</p>
                </div>
            </div>
            <div className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>SMK Ti Bali Global Denpasar</h1>
                    <p className='text-neutral-400'>2022 - 2025</p>
                </div>
            </div>
            </div>
  )
}

export default School