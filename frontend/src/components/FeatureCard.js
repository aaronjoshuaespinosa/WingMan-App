import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = (props) => {

    const { name, desc, icon } = props

    return (
        <>
            <div className=''>
                <div className='bg-light-lgry rounded-[5px] p-[24px] flex flex-col w-full h-fit gap-y-5 lg:gap-y-0'>
                    <div className=' pb-[24px] w-full'>
                        <p className='font-bold text-4xl cursor-default text-blk text-center lg:text-left hover:text-orng transition-text duration-[0.2s] ease-in-out'>{name}</p>
                        <p className='cursor-default text-blk text-center lg:text-left text-sm'>{desc}</p>
                    </div>
                    <div className='bg-orng rounded-[10px] p-[48px] w-full flex justify-center items-center'>
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