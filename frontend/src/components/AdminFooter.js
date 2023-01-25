import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const AdminFooter = () => {
    return (
        <div className='lg:bg-light-lgry lg:border-t-blk lg:border-[2px] mt-40'>

            <img src="https://ik.imagekit.io/efpqj5mis/LogoWingman_c3G261ZWo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671375425432" alt="Logo" className='mx-auto p-20 pointer-events-none select-none hidden lg:block' />

            <div className=' bg-wht w-full border-t-blk border-[2px] flex flex-col-reverse lg:flex-row items-center font-bold py-8 px-5 lg:px-56 justify-center lg:justify-between text-center'>
                <p className='pt-12 lg:pt-0 pointer-events-none'>© WINGMAN 2023</p>

                <div className='flex flex-col lg:flex-row gap-x-[24px] gap-y-[12px] items-center font-bold' >
                    {/* ICONS */}
                    <div className='flex flex-row gap-x-[24px]'>
                        <BsFacebook className='text-2xl cursor-pointer hover:text-orng transition-text ease-in-out duration-[0.2s]' />
                        <BsTwitter className='text-2xl cursor-pointer hover:text-orng transition-text ease-in-out duration-[0.2s]' />
                        <BsInstagram className='text-2xl cursor-pointer hover:text-orng transition-text ease-in-out duration-[0.2s]' />
                        <BsGithub className='text-2xl cursor-pointer hover:text-orng transition-text ease-in-out duration-[0.2s]' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminFooter