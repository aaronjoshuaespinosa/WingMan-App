import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { FeatureCard, FeatureCardRev, HeroCard, HeroFooter, HeroNav } from '../components'
import { FaArrowCircleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { landingWorks } from '../constants';
import { BsFillCartCheckFill, BsExclamationOctagonFill } from "react-icons/bs";
import { ImNewspaper } from "react-icons/im";
import { IoIosMegaphone } from "react-icons/io";
import { AiFillSchedule } from "react-icons/ai";
import { MdDoubleArrow } from "react-icons/md";

const Hero = () => {

    const ref = useRef(null)
    const navigate = useNavigate()

    const featureClick = () => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    const joinLink = () => {
        navigate("/join-us")
    }

    const devLink = () => {
        navigate("/devs", { replace: true })
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
                className='bg-wht w-full h-full font-space overflow-x-hidden'>
                <p className='fixed bottom-0 right-0 text-5xl hover:text-orng cursor-pointer m-5 z-20 transition-all ease-in-out duration-[0.2s]'><FaArrowCircleUp onClick={scrollToTop} style={{ opacity: visible ? '100%' : '0%' }} /></p>

                <HeroNav />

                <div className='p-5 lg:py-10 lg:px-56 w-full'>
                    <div className='flex flex-row gap-x-2'>

                        <motion.div
                            animate={{ x: [0, 32, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
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
                            className='text-orng font-bold text-7xl lg:text-9xl custom:text-7xl text-center select-none'>Welcome to WingMan
                        </motion.p>

                        <motion.p
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 4 * 0.02 }}
                            className='text-blk font-bold text-xl lg:text-6xl custom:text-4xl text-center select-none'>"FLY INTO MOTION"
                        </motion.p>

                        <motion.p
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 8 * 0.02 }}
                            className='text-blk text-base px-12 lg:text-xl text-center select-none'>An Online Assistant Platform for CEIT Students at Cavite State University - Don Severino Delas Alas Campus
                        </motion.p>

                        {/* CTA BUTTONS */}
                        <motion.div
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 12 * 0.02 }}
                            className='flex flex-row gap-x-5 py-28 lg:py-32 custom:py-10'>
                            <p className='bg-orng border-blk border-[2px] rounded-full py-2 px-6 font-bold cursor-pointer hover:drop-shadow-hoverShadow transition-all ease-in-out duration-[0.1s]' onClick={featureClick}>Features</p>
                            <p className='bg-wht border-blk border-[2px] rounded-full py-2 px-6 font-bold cursor-pointer hover:drop-shadow-hoverShadow transition-all ease-in-out duration-[0.1s]' onClick={joinLink}>Get Started</p>
                        </motion.div>

                        <p className='font-bold text-blk text-xl py-5 select-none'>↓ DISCOVER MORE BELOW ↓</p>
                    </div>
                </div>

                <div className='bg-orng px-5 py-12 lg:py-20 lg:px-56 w-full flex flex-col gap-y-5'>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 100, y: 0 }}
                        transition={{ delay: 0 * 0.03 }}
                        className='text-wht font-bold text-5xl lg:text-7xl select-none'>HOW IT WORKS:
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 100, y: 0 }}
                        transition={{ delay: 1 * 0.3 }}
                        className='flex flex-col lg:flex-row w-full gap-x-4 gap-y-3'>

                        {landingWorks.map((work) => (
                            <HeroCard key={work.id} index={work.id} title={work.title} desc={work.desc} />
                        ))}

                    </motion.div>
                </div>

                {/* FEATURES */}
                <div ref={ref} className='bg-wht px-5 py-12 lg:py-10 lg:px-56 w-full flex flex-col justify-center'>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-blk font-bold text-5xl lg:text-7xl select-none text-center'>~FEATURES~</motion.p>

                    <div className='w-full flex flex-col lg:flex-row lg:flex-wrap py-10 justify-center'>
                        <div className='basis-1/3 py-2 lg:p-5'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}>
                                <FeatureCard name="MARKETPLACE" desc="Are you searching for an item or a service that you need or are you looking forward to sell an item or a service in order to gain profit? Whether which one of you are in these two, the marketplace is the place for you." icon=<BsFillCartCheckFill /> />
                            </motion.div>
                        </div>

                        <div className='basis-1/3 py-2 lg:p-5'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 * 0.1 }}>
                                <FeatureCard name="NEWS" desc="Looking for a reliable source of news and announcements inside the campus? WingMan's got you covered!  With news straight from the university and announcements coming from various school organizations, you can now be informed and updated while also being assured that the information you are getting is verified and true." icon=<ImNewspaper /> />
                            </motion.div>
                        </div>

                        <div className='basis-1/3 py-2 lg:p-5'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2 * 0.1 }}>
                                <FeatureCard name="FAQs" desc="Do you want to ask something from your fellow schoolmates but you don't have the confidence to do it personally? With this feature it is now possible for you to do it. Just post your question and  you shall receive different answers from your fellow CvSUenos." icon=<IoIosMegaphone /> />
                            </motion.div>
                        </div>

                        <div className='basis-1/3 py-2 lg:p-5'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3 * 0.1 }}>
                                <FeatureCard name="APPOINTMENTS" desc="A slow transaction consumes a lot of your time and energy, right? That's why this feature allows you to make your own appointment whenever you needed something from the university. So you can have a faster transaction." icon=<AiFillSchedule /> />
                            </motion.div>
                        </div>

                        <div className='basis-1/3 py-2 lg:p-5'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 4 * 0.1 }}>
                                <FeatureCard name="COMPLAINTS" desc="Did you have a negative experience at the university? This feature will serve as your platform to let your voice out and also to be heard." icon=<BsExclamationOctagonFill /> />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* TO DEVS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='bg-orng px-5 py-12 lg:py-10 lg:px-56 w-full flex flex-col gap-y-5 overflow-hidden relative'>
                    <div className='py-40 w-full justify-center items-center flex flex-col gap-y-5'>
                        <motion.div
                            whileHover={{ scale: 1.3, rotate: -1.5 }}
                            className='relative justify-center items-center flex flex-col cursor-pointer' onClick={devLink}>
                            <div className='flex flex-col'>
                                <p className='text-wht font-bold text-9xl lg:text-9xl select-none text-center'>meet</p>
                                <p className='text-wht font-bold text-9xl lg:text-9xl select-none text-center mt-[-1.5rem]'>devs</p>
                            </div>
                            <p className='text-blk font-bold text-6xl lg:text-6xl select-none absolute'>THE</p>
                        </motion.div>
                    </div>
                    <MdDoubleArrow className='text-wht text-[5rem] lg:text-[10rem] absolute rotate-45 lg:left-[30%] top-[25%] lg:top-[15%]' />
                    <MdDoubleArrow className='text-wht text-[5rem] lg:text-[10rem] absolute -rotate-[135deg] right-0 lg:right-[30%] bottom-[20%] lg:bottom-[10%]' />
                    <p className='absolute text-wht/40 font-bold text-[18rem] lg:text-[20rem] select-none bottom-[-9rem] left-[-9rem] lg:bottom-[-6rem] lg:left-[-6rem]'>meet</p>
                    <p className='absolute text-wht/40 font-bold text-[18rem] lg:text-[20rem] select-none top-[-12rem] right-[-12rem] lg:top-[-6rem] lg:right-[-6rem]'>devs</p>
                </motion.div>

                {/* CTA */}
                <div className='bg-wht px-5 py-12 lg:py-10 lg:px-56 w-full flex flex-col'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className='py-20 flex flex-col justify-center items-center gap-y-9'>
                        <p className='text-blk font-bold text-6xl lg:text-[10rem] select-none text-center'>interested?</p>
                        <motion.div
                            className='bg-orng text-xl border-blk border-[2px] rounded-[5px] py-3 px-6 font-bold cursor-pointer hover:drop-shadow-hoverShadow hover:bg-orng transition-all ease-in-out duration-[0.1s] relative'
                            onClick={joinLink}>
                            JOIN NOW
                        </motion.div>
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