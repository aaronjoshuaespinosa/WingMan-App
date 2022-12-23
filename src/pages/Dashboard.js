import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { NACard } from '../components'

const Dashboard = () => {
	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))
	}, [])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full px-[1.25rem] py-20 lg:pl-[22.5rem] lg:pr-[2.5rem] lg:py-32 z-[-1] font-space'>
				<div className='flex items-center place-content-between w-full py-2'>
					<p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem]'>LATEST NEWS</p>
					<p className='text-[0.7rem] font-bold'>GO TO NEWS</p>
				</div>

				<div className='flex flex-col lg:flex-row place-content-between w-full'>
					<NACard />
					<NACard />
					<NACard />
				</div>

				<div className='flex items-center place-content-between w-full py-2'>
					<p className='text-orng text-md lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem]'>LATEST ANNOUNCEMENTS</p>
					<p className='text-[0.7rem] font-bold'>GO TO ANNOUNCEMENTS</p>
				</div>

				<NACard />
				<NACard />
				<NACard />

			</div>
		</>
	)
}

export default Dashboard