import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Footer, NACard } from '../components'
import { motion } from 'framer-motion'

const News = () => {
	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))
	}, [])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space'>
				<div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[2.5rem] lg:pt-32 lg:pb-24 z-10'>
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						className='flex items-center place-content-between w-full py-2'>
						<p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem]'>LATEST NEWS</p>
						<p className='text-[0.65rem] font-bold lg:text-sm hover:underline cursor-pointer'>GO TO NEWS</p>
					</motion.div>

					<div className='flex flex-col place-content-between w-full gap-x-3'>
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 1 * 0.1 }}
							className='flex flex-col lg:flex-row place-content-between w-full gap-x-3'>
							<NACard />
							<NACard />
							<NACard />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 2 * 0.1 }}
							className='flex flex-col lg:flex-row place-content-between w-full gap-x-3'>
							<NACard />
							<NACard />
							<NACard />
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ delay: 3 * 0.1 }}
						className='flex items-center place-content-between w-full py-2'>
						<p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem]'>LATEST ANNOUNCEMENTS</p>
						<p className='text-[0.65rem] font-bold lg:text-sm hover:underline cursor-pointer'>GO TO ANNOUNCEMENTS</p>
					</motion.div>

					<div className='flex flex-col place-content-between w-full gap-x-3'>
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 4 * 0.1 }}
							className='flex flex-col lg:flex-row place-content-between w-full gap-x-3'>
							<NACard />
							<NACard />
							<NACard />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 5 * 0.1 }}
							className='flex flex-col lg:flex-row place-content-between w-full gap-x-3'>
							<NACard />
							<NACard />
							<NACard />
						</motion.div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default News