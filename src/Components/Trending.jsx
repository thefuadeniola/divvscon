import React from 'react'
import ProductCard from './ProductCard'
import { trendingCourses } from './data'

const Trending = () => {
  return (
    <div className='mt-[28px]'>
        <h1 className='text-xl font-semibold text-primary-black serif'>Trending Courses</h1>
        <div className='mt-4 w-full flex flex-row items-center gap-[40px] overflow-x-scroll scroll'>
            {
                trendingCourses.map((course) => (
                    <ProductCard name={course.name} image={course.image} key={course} />
                ))
            }
        </div>
    </div>
  )
}

export default Trending