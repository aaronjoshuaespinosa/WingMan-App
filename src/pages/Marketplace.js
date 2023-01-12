import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { MPService, Footer } from '../components'
import { motion } from 'framer-motion'

const Profile = () => {
    const dispatch = useDispatch()

    const toggle = useSelector((state) => state.Toggle.toggle.value)

    useEffect(() => {
        dispatch(setToggle({ value: !toggle }))
    }, [])

    const mpCategory = [
        { id: '0', name: 'All' },
        { id: '1', name: '3D' },
        { id: '2', name: 'Art' },
        { id: '3', name: 'Books' },
        { id: '4', name: 'Clothing' },
        { id: '5', name: 'Design' },
        { id: '6', name: 'Education' },
        { id: '7', name: 'Singing' },
        { id: '8', name: 'Typing' },
        { id: '9', name: 'Uniform' },
        { id: '10', name: 'More' },
    ]

    return (
        <>
            <div className='bg-wht absolute top-0 w-full font-space'>
                <div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[2.5rem] lg:pt-32 lg:pb-24 z-10'>
                    <div className='w-full flex flex-row place-content-between px-10 py-5'>
                        {mpCategory.map((category, i) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.02 }}
                                    key={category.id}>
                                    <p {...category} className='font-bold hover:text-orng transition-all ease-in-out duration-[0.2s] cursor-pointer'>{category.name}</p>
                                </motion.div>
                            )
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 * 0.2 }}
                        className='flex flex-col lg:flex-row gap-y-3 lg:gap-x-3 pt-5'>
                        <MPService />
                        <MPService />
                        <MPService />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 * 0.2 }}
                        className='flex flex-col lg:flex-row gap-y-3 lg:gap-x-3 pt-5'>
                        <MPService />
                        <MPService />
                        <MPService />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 * 0.2 }}
                        className='flex flex-col lg:flex-row gap-y-3 lg:gap-x-3 pt-5'>
                        <MPService />
                        <MPService />
                        <MPService />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4 * 0.2 }}
                        className='flex flex-col lg:flex-row gap-y-3 lg:gap-x-3 pt-5'>
                        <MPService />
                        <MPService />
                        <MPService />
                    </motion.div>
                </div>

                <Footer />

            </div>
        </>
    )
}

export default Profile