import React from 'react'
import dev from '../assets/development.svg'
import book from '../assets/book.svg'
import hourglass from '../assets/HourglassHigh.svg'
import calendar from '../assets/CalendarBlank.svg'
import arrow from '../assets/ArrowRight.svg'

const ProductCard = ({name, image}) => {
  return (
    <div className='flex flex-row gap-3 card'>
        <img src={image} />
        <div className='flex flex-col h-full justify-between py-4'>
            <h1 className='text-primary-black text-base font-semibold poppins'>{name}</h1>
            <div className='flex flex-row gap-2 items-center'>
                <img src={book} alt='lessons'/>
                <p className='text-base text-primary-blue poppins'>14 Lessons</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <img src={calendar} alt='lessons'/>
                <p className='text-base text-primary-blue poppins'>3 Months</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <img src={hourglass} alt='lessons'/>
                <p className='text-base text-primary-blue poppins'>2-3 Hours/Day</p>
            </div>

            <button className='btn flex flex-row items-center bg-primary-blue gap-4'>
                <p className='text-base text-white font-semibold poppins'>Enroll Course</p>
                <img src={arrow} alt='arrow' />
            </button>

        </div>
    </div>
  )
}

export default ProductCard