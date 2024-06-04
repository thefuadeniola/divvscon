import React from 'react'
import logo from '../assets/logo.svg'
import { learningHub, userAccountNav } from './data'
import help from '../assets/message-question.svg'
import logout from '../assets/logout.svg'

const SideNav = () => {
  return (
    <div className='sidenav fixed left-0 top-0 bottom-0 h-screen'>
        <div className='w-full flex justify-center'>
            <img src={logo} className='logo' />
        </div>

        <div className='pl-[45px]'>
            <div className='mt-8'>
                <p className='text-primary-purple font-semibold text-sm poppins'>User Account</p>
            </div>
            <div className='mt-2 p-2 flex flex-col gap-4'>
                {
                    userAccountNav.map((item)=>(
                        <div className='flex flex-row items-center gap-2'>
                            <img src={item.icon} className={`navicon ${item.name !== 'Dashboard' && 'opacity-60'}`} />
                            <span className={`text-[14px] text-primary-purple poppins ${item.name !== 'Dashboard' && 'opacity-60'}`}>{item.name}</span>
                        </div>
                    ))
                }
            </div>

        </div>

        <div className='pl-[45px] mt-4'>
            <div className='mt-6'>
                <p className='text-primary-purple font-semibold text-sm poppins'>Learning Hub</p>
            </div>
            <div className='mt-2 p-2 flex flex-col gap-4'>
                {
                    learningHub.map((item)=>(
                        <div className='flex flex-row items-center gap-2'>
                            <img src={item.icon} className={`navicon ${item.name !== 'Dashboard' && 'opacity-60'}`} />
                            <span className={`text-[14px] text-primary-purple poppins ${item.name !== 'Dashboard' && 'opacity-60'}`}>{item.name}</span>
                        </div>
                    ))
                }
            </div>
            

        </div>
        <div className='pl-[45px] mt-8'>
            <div className='mt-6'>
                <p className='text-primary-purple font-semibold text-sm poppins'>Help and Support</p>
            </div>
            <div className='mt-2 p-2 flex flex-col gap-4'>
                        <div className='flex flex-row items-center gap-2'>
                            <img src={help} className={`navicon opacity-60`} />
                            <span className={`text-[14px] text-primary-purple poppins opacity-60`}>Help</span>
                        </div>
            </div>
            

        </div>
        <div className='pl-[45px] mt-10'>
            <div className='mt-6'>
                <p className='text-primary-purple font-semibold text-sm poppins'>Session Management</p>
            </div>
            <div className='mt-2 p-2 flex flex-col gap-4'>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={logout} className={`navicon opacity-60`} />
                        <span className={`text-[14px] text-primary-purple poppins opacity-60`}>Logout</span>
                    </div>
            </div>
            

        </div>


    </div>
  )
}

export default SideNav