import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeroFooter, HeroNav, ProfileCard } from '../components'
import { devs } from '../constants'
import { GiVibratingBall } from "react-icons/gi";

const Devs = () => {

    const navigate = useNavigate()

    const heroLink = () => {
        navigate("/")
    }

    return (
        <>
            <div className='w-full h-auto font-space'>
                {/* NAR BAR */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <HeroNav />
                </motion.div>


                <div className='p-5 lg:py-10 lg:px-56 w-full'>
                    <div className='flex flex-col gap-x-2 text-blk'>
                        {/* TITLE */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 * 0.2 }}>
                            <motion.p
                                whileHover={{ color: '#FC5F1C', scale: 1.15, rotate: -1.5 }}
                                className='font-bold text-7xl lg:text-9xl text-center w-full select-none'>The Devs</motion.p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 * 0.2 }}
                            className='font-bold lg:text-xl text-center w-full py-5 lg:px-28'>The developers of this website are three 3rd Year BS Computer Science students from Cavite State University - Don Severino Delas Alas Campus. Wingman is developed as a completion requirement for Software Engineering II.</motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3 * 0.2 }}
                            className='font-bold lg:text-xl text-center w-full py-5 lg:px-28'>The main goal of the website is to help students lessen the inconvenience experienced inside the university by creating an online platform where they can interact with their schoolfellows through conversations and transactions. Wingman empowers the students when expressing their grievances, whether academic or non-academic. It also aims to maintain the student's awareness of their environment by delivering an essential communique that explains what transpires within Cavite State University. In order to uphold <span className='text-orng font-bold hover:underline cursor-default'>truth, excellence, and service.</span></motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4 * 0.2 }}>
                            <motion.p
                                animate={{ y: [-10, 0, -10] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className='font-bold text-orng text-xl py-12 lg:py-20 select-none w-full text-center'>↓ KNOW MORE ABOUT THEM ↓</motion.p>
                        </motion.div>

                        {/* PROFILE CARDS */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5 * 0.2 }}
                            className='flex flex-col lg:flex-row w-full justify-center items-center gap-x-[12px] xl:gap-x-[24px] gap-y-[12px] pb-[48px]'>
                            {devs.map((dev) => (
                                <div>
                                    <ProfileCard
                                        key={dev.id}
                                        name={dev.name}
                                        img={dev.img}
                                        role1={dev.role1}
                                        role2={dev.role2}
                                        twtrIcon={dev.twtrIcon}
                                        twtrLink={dev.twtrLink}
                                        twtrState={dev.twtrState}
                                        fbIcon={dev.fbIcon}
                                        fbLink={dev.fbLink}
                                        fbState={dev.fbState}
                                        igIcon={dev.igIcon}
                                        igLink={dev.igLink}
                                        igState={dev.igState}
                                        ghIcon={dev.ghIcon}
                                        ghLink={dev.ghLink}
                                        ghState={dev.ghState}
                                    />
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6 * 0.2 }}
                            className='w-full flex flex-col gap-y-5 items-center justify-center text-light-gry py-10 z-20'>
                            <motion.div
                                animate={{ rotate: -360 }}
                                drag
                                dragConstraints={{ top: -50, right: 50, bottom: 50, left: -50, }}
                                transition={{ ease: "linear", duration: 1, repeat: Infinity }}
                            >
                                <GiVibratingBall className='text-6xl' />
                            </motion.div>
                            <motion.p
                                drag
                                dragConstraints={{ top: -50, right: 50, bottom: 50, left: -50, }}
                                className='font-bold select-none'>~just a random svg rotating~</motion.p>
                        </motion.div>
                    </div>
                </div>

                {/* FOOTER */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <HeroFooter />
                </motion.div>
            </div>
        </>
    )
}

export default Devs