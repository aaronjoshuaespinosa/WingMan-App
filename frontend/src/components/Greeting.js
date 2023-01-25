import React from 'react'
import { navHeader } from '../constants'
import { motion } from 'framer-motion'

const Greeting = () => {
    return (
        <>
            <div className='pl-80 fixed w-full'>
                <div className='flex items-center px-3 lg:px-[1.5rem] xl:px-10 text-2xl lg:text-5xl text-blk font-bold border-b-blk border-b-[2px] select-none w-full relative z-0 h-16 lg:h-28'>
                    {navHeader.map(labels => {
                        return (
                            <motion.div
                                {...labels}
                                key={labels.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p>{window.location.pathname === labels.link ? labels.name : null}</p>
                                <p className='text-sm lg:text-base truncate'>{window.location.pathname === labels.link ? labels.desc : null}</p>
                            </motion.div>

                        )
                    })}
                    <div className='flex justify-end items-center h-full w-full'>
                        <input type='text' placeholder='Search the market...' className='py-2 px-3 w-64 md:w-72 lg:w-80 xl:w-96 text-base border-blk border-[2px] rounded-[3px]'></input>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Greeting