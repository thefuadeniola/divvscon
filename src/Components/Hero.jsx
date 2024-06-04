import React from 'react'
import loop from '../assets/LooperGroup.svg'

const Hero = () => {
  return (
    <div className='mt-[28px] hero w-full px-2 pl-[25px] justify-between flex flex-row'>
        <div className='py-4'>
            <h1 className='text-xl text-primary-black serif'>Divvscon</h1>
            <h1 className='text-5xl font-bold text-primary-black serif mt-6'>Go Premium</h1>
            <p className='mt-2 max-w-md'>Explore vast tech courses with premium membership</p>
            <button className='btn mt-6 bg-primary-blue poppins font-semibold text-sm text-white'>Upgrade</button>
        </div>
        <img src={loop} className='h-full' />
    </div>
  )
}

export default Hero