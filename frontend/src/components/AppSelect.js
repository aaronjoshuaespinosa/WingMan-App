import React from 'react'
import { motion } from 'framer-motion'

const AppSelect = (props) => {

    const { name, onClick, icon } = props

    return (
        <>
            <div className='w-full h-[25rem] rounded-[5px] border-[2px] border-blk my-[12px] cursor-pointer hover:drop-shadow-hoverShadow transition-all ease-in-out duration-[0.1s] overflow-hidden z-10 flex flex-col-reverse' onClick={onClick}>
                <div className='bg-wht h-1/6 px-[24px] flex items-center border-t-blk border-t-[2px] z-20'>
                    <p className='text-blk text-2xl font-bold'>{name}</p>
                </div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='bg-orng hover:bg-light-orng h-5/6 transition-all ease-in-out duration-[0.2s] flex justify-center items-center text-[12rem] text-wht z-0'>
                    <p className='drop-shadow-stroke'>{icon}</p>
                </motion.div>

            </div>
        </>
    )
}

export default AppSelect