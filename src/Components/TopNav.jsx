import React from 'react'
import search from '../assets/search.svg'
import notification from '../assets/notifications.svg'
import user from '../assets/user.svg'

const TopNav = () => {
  return (
    <nav className='nav flex flex-row justify-between items-center'>
        <h1 className='text-primary-black font-bold text-2xl poppins'>Dashboard</h1>
        <div className='searchbar bg-secondary-blue flex flex-row items-center gap-4'>
            <img src={search} alt='search' />
            <input className='searchbar-input text-sm text-primary-black poppins' placeholder='Search' />
        </div>
        <div className='user flex flex-row items-center gap-6'>
            <img src={notification} alt='notification' />

            <div className='flex flex-row items-center gap-4'>
                <img src={user} alt='user' />
                <div className='flex flex-col'>
                    <h1 className='text-sm font-semibold text-primary-black poppins'>Samson Victor</h1>
                    <p className='text-secondary-black text-sm poppins'>Standard User</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default TopNav