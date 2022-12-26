import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { NACard, FAQCard } from '../components'

const Dashboard = () => {
	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))
	}, [])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space'>
				<div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[2.5rem] lg:pt-32 lg:pb-24 z-10'>
					<div className='flex items-center place-content-between w-full py-2'>
						<p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem]'>LATEST NEWS</p>
						<p className='text-[0.65rem] font-bold lg:text-sm hover:underline cursor-pointer'>GO TO NEWS</p>
					</div>

					<div className='flex flex-col lg:flex-row place-content-between w-full gap-x-3'>
						<NACard />
						<NACard />
						<NACard />
					</div>

					<div className='flex items-center place-content-between w-full py-2'>
						<p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem]'>LATEST ANNOUNCEMENTS</p>
						<p className='text-[0.65rem] font-bold lg:text-sm hover:underline cursor-pointer'>GO TO ANNOUNCEMENTS</p>
					</div>

					<div className='flex flex-col lg:flex-row place-content-between w-full gap-x-3'>
						<NACard />
						<NACard />
						<NACard />
					</div>

					<h1 className='font-bold text-3xl mt-2'>FAQ Spotlight</h1>

					<div className='w-full h-full flex flex-col lg:flex-row gap-x-3'>
						<FAQCard />
						<FAQCard />
					</div>
				</div>
				<footer className='flex flex-col justify-center items-center lg:flex-row lg:place-content-between font-black text-sm bg-wht border-t-[2px] border-blk w-full lg:pl-[22.5rem] h-28 px-10'>
					<p className='cursor-pointer hover:text-light-gry'>The Dev Profiles</p>
					<div className='flex flex-row gap-x-5'>
						<p className='cursor-pointer hover:text-light-gry'>Terms and Conditions</p>
						<p className='cursor-pointer hover:text-light-gry'>Privacy Policy</p>
						<p>ⓒ 2022</p>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Dashboard