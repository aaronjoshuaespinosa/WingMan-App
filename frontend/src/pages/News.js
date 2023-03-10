import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Footer, Greeting, NACard } from '../components'
import { motion } from 'framer-motion'
import { announcements, news } from '../constants'

const News = () => {
	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))
	}, [])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space z-10'>
				<Greeting />
				<div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[2.5rem] lg:pt-32 lg:pb-24 z-10'>

					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						className='flex items-center place-content-between w-full py-2'>
						<p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem]'>LATEST NEWS</p>
						{/* <p className='text-[0.65rem] font-bold lg:text-sm hover:underline cursor-pointer'>GO TO NEWS</p> */}
					</motion.div>

					<div className='flex w-full'>
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 1 * 0.1 }}
							className='lg:gap-x-0 pt-5 flex flex-col lg:flex-row lg:flex-wrap w-full'>
							{news.map((news, i) => (
								<motion.div
									initial={{ opacity: 0, y: 15 }}
									animate={{ opacity: 100, y: 0 }}
									transition={{ delay: i * 0.1 }}
									className='basis-1/3 p-1'>
									<NACard key={news.id} name={news.name} author={news.author} link={news.link} img={news.img} bool={news.new} />
								</motion.div>
							))}
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ delay: 2 * 0.1 }}
						className='flex items-center place-content-between w-full py-2'>
						<p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem]'>LATEST ANNOUNCEMENTS</p>
						{/* <p className='text-[0.65rem] font-bold lg:text-sm hover:underline cursor-pointer'>GO TO ANNOUNCEMENTS</p> */}
					</motion.div>

					<div className='flex w-full'>
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 3 * 0.1 }}
							className='lg:gap-x-0 pt-5 flex flex-col lg:flex-row lg:flex-wrap w-full'>
							{announcements.map((announcements, i) => (
								<motion.div
									initial={{ opacity: 0, y: 15 }}
									animate={{ opacity: 100, y: 0 }}
									transition={{ delay: i * 0.1 }}
									className='basis-1/3 p-1'>
									<NACard key={announcements.id} name={announcements.name} author={announcements.author} link={announcements.link} img={announcements.img} bool={announcements.new} />
								</motion.div>
							))}
						</motion.div>
					</div>

				</div>
				<Footer />
			</div>
		</>
	)
}

export default News