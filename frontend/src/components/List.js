import { React, useState } from 'react'
import { useMarketsContext } from '../hooks/useMarketsContext'
import { motion } from 'framer-motion'
import MPService from './MPService'

function List(props) {
    const { markets } = useMarketsContext()
    return (
        <div className='flex w-full'>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 * 0.1 }}
                className='lg:gap-x-0 pt-5 flex flex-col lg:flex-row lg:flex-wrap w-full'>

                {markets && markets.map((market, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 100, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className='basis-1/3 p-1'>
                        <MPService key={market.id} market={market} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default List