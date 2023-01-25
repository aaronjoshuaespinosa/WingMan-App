import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

    return (
        <>
            <footer className='flex flex-col justify-center items-center lg:flex-row lg:place-content-between text-sm bg-wht border-t-[2px] border-blk w-full lg:pl-[22.5rem] h-auto lg:h-28 px-10'>
                <div className='py-10 lg:py-0 flex flex-col text-lg lg:text-base text-blk'>
                    <p className='font-bold text-center hidden lg:block'>WINGMAN 2023</p>
                    <p className='font-bold text-center lg:hidden'>Dashboard</p>
                    <p className='font-bold text-center lg:hidden'>Marketplace</p>
                    <p className='font-bold text-center lg:hidden'>News & Announcements</p>
                    <p className='font-bold text-center lg:hidden'>FAQs</p>
                    <p className='font-bold text-center lg:hidden'>Appointments</p>
                    <p className='font-bold text-center lg:hidden'>Complaint System</p>
                </div>
                <div className='flex flex-col items-center lg:flex-row gap-x-5 pt-5 pb-10 lg:py-0'>
                    <a href="/terms-and-conditions" target="_blank" className='cursor-pointer hover:text-light-gry'>Terms and Conditions</a>
                    <a href="/privacy-policy" target="_blank" className='cursor-pointer hover:text-light-gry'>Privacy Policy</a>
                    <p className='cursor-pointer hover:text-light-gry lg:hidden font-bold pt-5'>WINGMAN 2023</p>
                </div>
            </footer>
        </>
    )
}

export default Footer