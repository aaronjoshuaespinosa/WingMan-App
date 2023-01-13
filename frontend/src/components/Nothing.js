import React from 'react'
import { GiHummingbird } from "react-icons/gi";
import { motion } from 'framer-motion'

const Nothing = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                transition={{ delay: 2 * 0.1 }}
                whileInView={{ opacity: 100, y: 0 }}
                className='w-full flex flex-col justify-center items-center py-5 gap-y-5 text-light-gry'>
                <motion.div
                    whileHover={{ y: [10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10] }}
                    transition={{ duration: 40 }}
                    className="cursor-pointer"
                >
                    <GiHummingbird className='text-9xl hover:text-orng' />
                </motion.div>

                <p className='text-2xl font-bold'>~Nothing else follows~</p>
            </motion.div>
        </>
    )
}

export default Nothing