import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppCard, AppSelect, Footer } from '../components'

const Appointments = () => {
	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))
	}, [])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space'>
				<div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[3rem] lg:pt-40 lg:pb-10 z-10'>
					<div className='flex flex-col gap-y-4'>
						{/* TITLE */}
						<div className='flex flex-row justify-between items-center w-full'>
							<p className='text-orng font-bold text-lg lg:text-xl'>YOUR APPOINTMENTS</p>
							<p className='text-[0.65rem] font-bold lg:text-sm text-blk'>See more</p>
						</div>
						{/* CARDS */}
						<div className='flex flex-col gap-y-3'>
							<AppCard />
							<AppCard />
							<AppCard />
						</div>
					</div>

					<div className='w-full'>
						<p className='text-blk text-5xl font-bold pt-[36px] pb-[12px]'>Wanted to set an appointment?</p>
						<div className='flex flex-row gap-x-[12px] w-full'>
							<AppSelect />
							<AppSelect />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Appointments