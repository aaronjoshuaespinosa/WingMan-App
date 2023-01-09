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
            <div className='bg-wht w-full h-full font-space'>
                <div className='w-full py-3 px-5 lg:px-56 border-b-blk border-[1px]'>
                    <div className='flex flex-row justify-between items-center h-full'>
                        <div className='h-full w-full flex items-center justify-center lg:justify-start'>
                            <img src="https://ik.imagekit.io/efpqj5mis/LogoWingman_c3G261ZWo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671375425432" alt="Logo" className='h-20 pointer-events-none select-none' />
                        </div>
                        <div className='hidden lg:flex flex-row w-full h-full justify-end items-center gap-x-5 font-bold text-blk'>
                            <p className='bg-orng py-2 px-5 border-blk border-[2px] rounded-[4px] hover:bg-light-orng transition-all ease-in-out duration-[0.2s] cursor-pointer' onClick={signLink}>SIGN IN</p>
                            <p className='bg-orng py-2 px-5 border-blk border-[2px] rounded-[4px] hover:bg-light-orng transition-all ease-in-out duration-[0.2s] cursor-pointer' onClick={joinLink}>JOIN US</p>
                        </div>
                    </div>
                </div>

                <div className='p-5 lg:py-10 lg:px-56 w-full'>
                    <div className='flex flex-row gap-x-2'>
                        <div className='h-6 w-6 bg-orng rounded-full'></div>
                        <div className='h-6 w-6 bg-light-orng rounded-full'></div>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center pt-12 lg:pt-24 gap-y-4 lg:gap-y-5'>
                        <p className='text-orng font-bold text-7xl lg:text-9xl text-center'>FLY INTO MOTION</p>
                        <p className='text-blk font-bold text-xl lg:text-5xl text-center'>Join the flocking website now!</p>
                        <p className='text-blk text-base px-12 lg:text-xl text-center'>Be updated on the latest news. Be with the market. </p>
                        <div className='flex flex-row gap-x-5 py-28 lg:py-32'>
                            <p className='bg-orng border-blk border-[2px] rounded-full py-2 px-6 font-bold cursor-pointer hover:bg-light-orng transition-all ease-in-out duration-[0.2s]'>Features</p>
                            <p className='bg-wht border-blk border-[2px] rounded-full py-2 px-6 font-bold cursor-pointer hover:bg-light-lgry transition-all ease-in-out duration-[0.2s]'>Get Started</p>
                        </div>
                        <p className='font-bold text-blk text-xl'>↓ SCROLL ↓</p>
                    </div>
                </div>

                <div className='bg-orng px-5 py-12 lg:py-10 lg:px-56 w-full flex flex-col gap-y-5'>
                    <p className='text-wht font-bold text-5xl lg:text-7xl'>HOW IT FLOCKING WORKS:</p>
                    <div className='flex flex-col lg:flex-row w-full gap-x-4 gap-y-3'>
                        <div className='bg-wht border-blk border-[2px] rounded-[15px] p-[24px] flex flex-col gap-y-5'>
                            <div className='flex flex-row w-full items-center gap-x-3'>
                                <div className='h-16 w-16 text-3xl font-bold text-wht bg-orng rounded-full flex items-center justify-center'>
                                    <p className=''>1</p>
                                </div>
                                <p className='text-blk font-bold text-5xl'>WHAT</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum elit. In hac habitasse platea dictumst. Nam quis elit non ante auctor consequat. Nullam volutpat ullamcorper tempus. Phasellus auctor mi in tempus faucibus. Aliquam ut auctor ex, et suscipit diam. Aenean cursus justo nec metus sollicitudin elementum. Maecenas at ullamcorper lacus, sit amet pharetra magna. </p>
                        </div>

                        <div className='bg-wht border-blk border-[2px] rounded-[15px] p-[24px] flex flex-col gap-y-5'>
                            <div className='flex flex-row w-full items-center gap-x-3'>
                                <div className='h-16 w-16 text-3xl font-bold text-wht bg-orng rounded-full flex items-center justify-center'>
                                    <p className=''>2</p>
                                </div>
                                <p className='text-blk font-bold text-5xl'>THE</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum elit. In hac habitasse platea dictumst. Nam quis elit non ante auctor consequat. Nullam volutpat ullamcorper tempus. Phasellus auctor mi in tempus faucibus. Aliquam ut auctor ex, et suscipit diam. Aenean cursus justo nec metus sollicitudin elementum. Maecenas at ullamcorper lacus, sit amet pharetra magna. </p>
                        </div>

                        <div className='bg-wht border-blk border-[2px] rounded-[15px] p-[24px] flex flex-col gap-y-5'>
                            <div className='flex flex-row w-full items-center gap-x-3'>
                                <div className='h-16 w-16 text-3xl font-bold text-wht bg-orng rounded-full flex items-center justify-center'>
                                    <p className=''>3</p>
                                </div>
                                <p className='text-blk font-bold text-5xl'>FLOCK</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum elit. In hac habitasse platea dictumst. Nam quis elit non ante auctor consequat. Nullam volutpat ullamcorper tempus. Phasellus auctor mi in tempus faucibus. Aliquam ut auctor ex, et suscipit diam. Aenean cursus justo nec metus sollicitudin elementum. Maecenas at ullamcorper lacus, sit amet pharetra magna. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero