import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroNav = () => {

    const navigate = useNavigate()

    const signLink = () => {
        navigate("/sign-in")
    }

    const joinLink = () => {
        navigate("/join-us")
    }

    const heroLink = () => {
        navigate("/")
    }

    return (
        <>
            <div className='w-full py-3 px-5 lg:px-56 border-b-blk border-[1px]'>
                <div className='flex flex-row justify-between items-center h-full'>
                    <div className='h-full w-full flex items-center justify-center lg:justify-start'>
                        <img src="https://ik.imagekit.io/efpqj5mis/LogoWingman_c3G261ZWo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671375425432" alt="Logo" className='h-20 cursor-pointer' onClick={heroLink} />
                    </div>
                    <div className='hidden lg:flex flex-row w-full h-full justify-end items-center gap-x-5 font-bold text-blk'>
                        <p className='bg-orng py-2 px-5 border-blk border-[2px] rounded-[4px] transition-all ease-in-out duration-[0.1s] hover:drop-shadow-hoverShadow cursor-pointer' onClick={signLink}>SIGN IN</p>
                        <p className='bg-orng py-2 px-5 border-blk border-[2px] rounded-[4px] transition-all ease-in-out duration-[0.1s] hover:drop-shadow-hoverShadow cursor-pointer' onClick={joinLink}>JOIN US</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroNav