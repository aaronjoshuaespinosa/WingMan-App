import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = (props) => {

    const { name, desc, icon, reverse } = props

    return (
        <>
            <div className='px-40'>
                <div className='bg-light-lgry rounded-[5px] p-[24px] flex w-full' style={reverse === "true" ? { flexDirection: "row-reverse" } : { flexDirection: "row" }}>
                    <div className='p-[24px] w-1/2'>
                        <motion.p
                            whileHover={{ scale: 1.05, rotate: 1, y: -3, color: "#FC5F1C" }}
                            className='font-bold text-5xl cursor-default text-blk'
                            style={reverse === "true" ? { textAlign: "right" } : { textAlign: "left" }}>{name}</motion.p>
                        <p className='cursor-default text-blk' style={reverse === "true" ? { textAlign: "right" } : { textAlign: "left" }}>{desc}</p>
                    </div>
                    <div className='bg-orng rounded-[10px] p-[48px] w-1/2 flex justify-center items-center'>
                        <motion.div
                            whileHover={{ scale: 1.15, rotate: 1.9 }}
                            className='text-[9rem] text-wht'>
                            {icon}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureCard