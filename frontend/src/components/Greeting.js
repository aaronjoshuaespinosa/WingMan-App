import React from 'react'
import { navHeader } from '../constants'
import { motion } from 'framer-motion'
import { FaSearch } from "react-icons/fa";

const Greeting = () => {
    return (
        <>
            <div className='pl-16 lg:pl-80 fixed w-full z-10 bg-wht'>
                <div className='flex items-center px-3 lg:px-[1.5rem] xl:px-10 text-2xl lg:text-5xl text-blk font-bold border-b-blk border-b-[2px] select-none w-full h-16 lg:h-28'>
                    {navHeader.map(labels => {
                        return (
                            <motion.div
                                {...labels}
                                key={labels.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p>{window.location.pathname === labels.link ? labels.name : null}</p>
                                <p className='text-sm lg:text-base truncate w-auto hidden lg:block'>{window.location.pathname === labels.link ? labels.desc : null}</p>
                            </motion.div>

                        )
                    })}
                    <div className='flex-row justify-end items-center h-12 w-full gap-x-1' style={window.location.pathname === "/marketplace" ? { display: "flex" } : { display: "none" }}>
                        <input type='text' placeholder='Search the market...' className='hidden lg:flex py-2 px-3 w-64 h-full md:w-72 lg:w-80 xl:w-96 text-base border-blk border-[2px] rounded-[3px]'></input>
                        <div className='bg-orng text-wht lg:flex text-base h-full py-2 px-3 border-blk border-[2px] rounded-[3px] hidden items-center cursor-pointer'>
                            <FaSearch />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Greeting