import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Footer, NACard } from '../components'

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
					<div className='flex items-center place-content-between w-full py-2'>
						<p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem]'>LATEST NEWS</p>
						<p className='text-[0.65rem] font-bold lg:text-sm hover:underline cursor-pointer'>GO TO NEWS</p>
					</div>

					<div className='flex flex-col place-content-between w-full gap-x-3'>
						<div className='flex flex-col lg:flex-row place-content-between w-full gap-x-3'>
							<NACard />
							<NACard />
							<NACard />
						</div>
						<div className='flex flex-col lg:flex-row place-content-between w-full gap-x-3'>
							<NACard />
							<NACard />
							<NACard />
						</div>
					</div>

					<div className='flex items-center place-content-between w-full py-2'>
						<p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem]'>LATEST ANNOUNCEMENTS</p>
						<p className='text-[0.65rem] font-bold lg:text-sm hover:underline cursor-pointer'>GO TO ANNOUNCEMENTS</p>
					</div>

					<div className='flex flex-col place-content-between w-full gap-x-3'>
						<div className='flex flex-col lg:flex-row place-content-between w-full gap-x-3'>
							<NACard />
							<NACard />
							<NACard />
						</div>
						<div className='flex flex-col lg:flex-row place-content-between w-full gap-x-3'>
							<NACard />
							<NACard />
							<NACard />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default News