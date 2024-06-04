import React from 'react'
import TopNav from './TopNav'
import Hero from './Hero'
import Courses from './Courses'
import Trending from './Trending'

const Main = () => {
  return (
    <div className='ml-[19.4vw] px-[44px] pb-8'>
        <TopNav />
        <Hero />
        <Courses />
        <Trending />
    </div>
  )
}

export default Main