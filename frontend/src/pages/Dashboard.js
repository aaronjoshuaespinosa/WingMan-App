import React, { useEffect, useState } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { NACard, FAQCard, Footer, Greeting } from '../components'
import { motion } from 'framer-motion'
import { firstAnnouncements, firstNews } from '../constants'

const Dashboard = () => {
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
						<p className='text-orng text-lg lg:text-xl font-bold px-1'>LATEST NEWS</p>
						{/* <p className='text-[0.65rem] font-bold lg:text-sm hover:underline cursor-pointer'>GO TO NEWS</p> */}
					</motion.div>

					<div className='flex w-full'>
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 1 * 0.1 }}
							className='lg:gap-x-0 pt-2 flex flex-col lg:flex-row lg:flex-wrap w-full'>
							{firstNews.map((news, i) => (
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
						<p className='text-orng text-lg lg:text-xl font-bold px-1'>LATEST ANNOUNCEMENTS</p>
						{/* <p className='text-[0.65rem] font-bold lg:text-sm hover:underline cursor-pointer'>GO TO ANNOUNCEMENTS</p> */}
					</motion.div>

					<div className='flex w-full'>
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 3 * 0.1 }}
							className='lg:gap-x-0 pt-2 flex flex-col lg:flex-row lg:flex-wrap w-full'>
							{firstAnnouncements.map((announcements, i) => (
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

					<motion.h1
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ delay: 4 * 0.1 }}
						className='font-bold text-3xl mt-2 px-1'>FAQ Spotlight</motion.h1>

					<motion.h1
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ delay: 5 * 0.1 }}
						className='text-orng text-lg lg:text-xl font-bold px-1'>CHECK THESE FAQs</motion.h1>

					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ delay: 6 * 0.1 }}
						className='w-full h-full flex flex-col items-start lg:flex-row gap-x-3 px-1'>
						<FAQCard user={"beth.harmon"} time={"1 week ago"} title={"Thesis Help!"} content={"How did you choose your thesis topic? What would be possible titles for the first three PhD thesis projects in your research group?"} />
						<FAQCard user={"james.mcavoy"} time={"1 week ago"} title={"Academic advise"} content={"If you start having difficulty juggling the combination of research, teaching, advising, and proposal-writing, what would you do to fix the problem?"} />
					</motion.div>
				</div>

				<Footer />

			</div>
		</>
	)
}

export default Dashboard