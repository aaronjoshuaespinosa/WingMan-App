import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = (props) => {

    const { name, desc, icon } = props

    return (
        <>
            <div className='px-0 lg:px-40'>
                <div className='bg-light-lgry rounded-[5px] p-[24px] flex flex-col lg:flex-row-reverse w-full gap-y-5 lg:gap-y-0'>
                    <div className='lg:p-[24px] w-full lg:w-1/2'>
                        <motion.p
                            whileHover={{ color: "#FC5F1C" }}
                            className='font-bold text-4xl cursor-default text-blk text-center lg:text-right'>{name}</motion.p>
                        <p className='cursor-default text-blk text-center lg:text-right text-sm'>{desc}</p>
                    </div>
                    <div className='bg-orng rounded-[10px] p-[48px] w-full lg:w-1/2 flex justify-center items-center'>
                        <motion.div
                            whileHover={{ scale: 1.15, rotate: 1.9 }}
                            className='text-[8rem] text-wht drop'>
                            {icon}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureCard