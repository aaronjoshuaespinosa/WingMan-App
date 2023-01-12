import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { HeroCard, HeroFooter } from '../components'
import { FaArrowCircleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
    const navigate = useNavigate()

    const signLink = () => {
        navigate("/sign-in")
    }

    const joinLink = () => {
        navigate("/join-us")
    }

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{ duration: 1.5 }}
                className='bg-wht w-full h-full font-space'>
                <p className='fixed bottom-0 right-0 text-5xl hover:text-orng cursor-pointer m-5 z-20 transition-all ease-in-out duration-[0.2s]'><FaArrowCircleUp onClick={scrollToTop} style={{ opacity: visible ? '100%' : '0%' }} /></p>

                <div className='w-full py-3 px-5 lg:px-56 border-b-blk border-[1px]'>
                    <div className='flex flex-row justify-between items-center h-full'>
                        <div className='h-full w-full flex items-center justify-center lg:justify-start'>
                            <img src="https://ik.imagekit.io/efpqj5mis/LogoWingman_c3G261ZWo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671375425432" alt="Logo" className='h-20 pointer-events-none select-none' />
                        </div>
                        <div className='hidden lg:flex flex-row w-full h-full justify-end items-center gap-x-5 font-bold text-blk'>
                            <p className='bg-orng py-2 px-5 border-blk border-[2px] rounded-[4px] transition-all ease-in-out duration-[0.1s] hover:drop-shadow-hoverShadow cursor-pointer' onClick={signLink}>SIGN IN</p>
                            <p className='bg-orng py-2 px-5 border-blk border-[2px] rounded-[4px] transition-all ease-in-out duration-[0.1s] hover:drop-shadow-hoverShadow cursor-pointer' onClick={joinLink}>JOIN US</p>
                        </div>
                    </div>
                </div>

                <div className='p-5 lg:py-10 lg:px-56 w-full'>
                    <div className='flex flex-row gap-x-2'>

                        <motion.div
                            animate={{ x: [0, 32, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            drag
                            whileDrag={{}}
                            className='h-6 w-6 bg-orng/70 rounded-full z-20'>
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, -32, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            drag
                            whileDrag={{}}
                            className='h-6 w-6 bg-orng/70 rounded-full z-20'>
                        </motion.div>

                    </div>

                    <div className='w-full flex flex-col justify-center items-center pt-12 lg:pt-24 custom:pt-1 gap-y-4 lg:gap-y-5 custom:gap-y-5'>

                        <motion.p
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='text-orng font-bold text-7xl lg:text-9xl custom:text-8xl text-center select-none'>FLY INTO MOTION
                        </motion.p>

                        <motion.p
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 4 * 0.02 }}
                            className='text-blk font-bold text-xl lg:text-5xl custom:text-4xl text-center select-none'>Join the flocking website now!
                        </motion.p>

                        <motion.p
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 8 * 0.02 }}
                            className='text-blk text-base px-12 lg:text-xl text-center select-none'>Be updated on the latest news. Be with the market.
                        </motion.p>

                        {/* CTA BUTTONS */}
                        <motion.div
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 12 * 0.02 }}
                            className='flex flex-row gap-x-5 py-28 lg:py-32 custom:py-10'>
                            <p className='bg-orng border-blk border-[2px] rounded-full py-2 px-6 font-bold cursor-pointer hover:drop-shadow-hoverShadow transition-all ease-in-out duration-[0.1s]'>Features</p>
                            <p className='bg-wht border-blk border-[2px] rounded-full py-2 px-6 font-bold cursor-pointer hover:drop-shadow-hoverShadow transition-all ease-in-out duration-[0.1s]' onClick={joinLink}>Get Started</p>
                        </motion.div>

                        <motion.p
                            animate={{ y: [-10, 0, -10] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className='font-bold text-blk text-xl py-5 select-none'>↓ SCROLL ↓</motion.p>
                    </div>
                </div>

                <div className='bg-orng px-5 py-12 lg:py-10 lg:px-56 w-full flex flex-col gap-y-5'>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 100, y: 0 }}
                        transition={{ delay: 0 * 0.03 }}
                        className='text-wht font-bold text-5xl lg:text-7xl select-none'>HOW IT FLOCKING WORKS:
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 100, y: 0 }}
                        transition={{ delay: 1 * 0.3 }}
                        className='flex flex-col lg:flex-row w-full gap-x-4 gap-y-3'>
                        <HeroCard />
                        <HeroCard />
                        <HeroCard />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100 }}
                    transition={{ delay: 0.07 }}>
                    <HeroFooter />
                </motion.div>

            </motion.div>
        </>
    )
}

export default Hero