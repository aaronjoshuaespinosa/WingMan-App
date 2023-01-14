import React, { useEffect, useState } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Footer, Nothing } from '../components'
import MPService from '../components/MPService'
import { motion } from 'framer-motion'
import MarketForm from '../components/MarketForm'
import { useMarketsContext } from '../hooks/useMarketsContext'

const Profile = () => {
    const dispatch = useDispatch()

    const [market, setMarket] = useState(false)

    const clickMarket = () => {
        setMarket(current => !current)
    }

    const { markets, dispatch: dsptch } = useMarketsContext()
    const toggle = useSelector((state) => state.Toggle.toggle.value)

    useEffect(() => {
        dispatch(setToggle({ value: !toggle }))
        const fetchMarkets = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/marketplace`)
            const json = await response.json()
            if (response.ok) {
                dsptch({ type: 'SET_OFFERS', payload: json })
            }
        }
        fetchMarkets()
    }, [dsptch])

    // const mpCategory = [
    //     { id: '0', name: 'All' },
    //     { id: '1', name: '3D' },
    //     { id: '2', name: 'Art' },
    //     { id: '3', name: 'Books' },
    //     { id: '4', name: 'Clothing' },
    //     { id: '5', name: 'Design' },
    //     { id: '6', name: 'Education' },
    //     { id: '7', name: 'Singing' },
    //     { id: '8', name: 'Typing' },
    //     { id: '9', name: 'Uniform' },
    //     { id: '10', name: 'More' },
    // ]

    return (
        <>
            <div className='bg-wht absolute top-0 w-full font-space'>

                {/* MARKETPLACE FORM*/}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className='absolute z-20 w-full h-full bg-blk/90' style={market ? { display: "block" } : { display: "none" }}>
                    <div className='fixed w-full h-full'>
                        <div className='flex justify-center items-center h-full'>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                className='flex justify-center items-center h-[90%] w-[90%] lg:w-auto'>
                                <MarketForm onClick={clickMarket} />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[2.5rem] lg:pt-32 lg:pb-24 w-full z-10'>

                    {/* CATEGORIES - TEMPORARILY REPLACED */}
                    {/* <div className='w-full flex flex-row place-content-between px-10 py-5'>
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
                    </div> */}

                    <div className='px-1'>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='flex flex-row justify-between items-center w-full p-[12px] border-blk border-[2px] rounded-[3px]'>
                            <p className='font-bold text-lg'>Wanna sell something?</p>
                            <p className='px-9 py-3 bg-orng border-blk border-[2px] rounded-[3px] text-wht font-bold text-xl hover:drop-shadow-hoverShadow transition-all ease-in-out duration-[0.1s] cursor-pointer' onClick={clickMarket}>+</p>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 * 0.1 }}
                        className='text-orng font-bold px-1 pt-3 text-lg lg:text-xl'>TRANSACTIONS IN THE MARKET</motion.p>

                    <div className='flex w-full'>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2 * 0.1 }}
                            className='lg:gap-x-0 pt-5 flex flex-col lg:flex-row lg:flex-wrap w-full'>

                            {markets && markets.map((market) => (
                                <div className='basis-1/3 p-1'>
                                    <MPService key={market.id} market={market} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className='py-20'>
                        <Nothing />
                    </div>

                    {/* Ginawa ko munang comments, di gumagana pag ginagamit ulit yung MPService kailangan naka-map na katulad sa taas
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 * 0.1 }}
                        className='flex flex-col lg:flex-row gap-y-3 lg:gap-x-3 pt-5'>
                        <MPService />
                        <MPService />
                        <MPService />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3 * 0.1 }}
                        className='flex flex-col lg:flex-row gap-y-3 lg:gap-x-3 pt-5'>
                        <MPService />
                        <MPService />
                        <MPService />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4 * 0.1 }}
                        className='flex flex-col lg:flex-row gap-y-3 lg:gap-x-3 pt-5'>
                        <MPService />
                        <MPService />
                        <MPService />
                    </motion.div>
                    */}
                </div>

                <Footer />

            </div>
        </>
    )
}

export default Profile