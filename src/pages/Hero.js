import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()

    const signLink = () => {
        navigate("/sign-in")
    }

    const joinLink = () => {
        navigate("/join-us")
    }

    return (
        <>
            <div className='w-full h-full font-space'>
                <div className='bg-blk w-full py-3 px-56'>
                    <div className='flex flex-row justify-between items-center h-full'>
                        <div className='h-full w-full flex items-center justify-start ml-16 lg:ml-0'>
                            <img src='https://ik.imagekit.io/xzgmktvzg/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671386953332' alt="wingman-logo" className='h-14 lg:h-24 select-none ' />
                        </div>
                        <div className='flex flex-row w-full h-full justify-end items-center gap-x-5 font-bold text-blk'>
                            <p className='bg-orng py-2 px-5 rounded-[4px] hover:bg-light-orng transition-all ease-in-out duration-[0.2s] cursor-pointer' onClick={signLink}>SIGN IN</p>
                            <p className='bg-orng py-2 px-5 rounded-[4px] hover:bg-light-orng transition-all ease-in-out duration-[0.2s] cursor-pointer' onClick={joinLink}>LOGIN</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero