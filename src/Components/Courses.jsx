import React from 'react'
import loope from '../assets/loope.svg'
import { Box } from '@mui/material'
import Slider from '@mui/material/Slider'

const Courses = () => {
  return (
    <div className='mt-[28px]'>
        <h1 className='text-xl font-semibold text-primary-black serif'>Your Courses</h1>
        <p className='text-sm text-secondary-black poppins'>In Progress</p>
        <div className='courses mt-2 relative p-6'>
            <img src={loope} className='absolute top-0' />
            <h1 className='text-primary-black text-3xl serif z-10'>Product Design</h1>
            <p className='text-base text-secondary-black'>Estimated Progress: 10%</p>

            <div className='mt-8'>
                <Box sx={{ width: 900 }}>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={10}
                    />
                </Box>
                <p className='poppins text-secondary-black text-sm'>Overall Progress</p>
            </div>
        </div>
    </div>
  )
}

export default Courses