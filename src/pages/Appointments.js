import React, { useEffect, useState } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppCard, AppForm, AppSelect, Footer } from '../components'

const Appointments = () => {
	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	const [doc, setDoc] = useState(false)
	const [aprl, setAprl] = useState(false)

	const docClick = () => {
		setDoc(current => !current)
	}

	const aprlClick = () => {
		setAprl(current => !current)
	}

	const backClick = () => {
		if (doc === true) {
			setDoc(current => !current)
		}

		else if (aprl === true) {
			setAprl(current => !current)
		}
	}

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

						{/* CARDS - DITO MA-STORE YUNG DATA FROM USER */}
						<div className='flex flex-col gap-y-3'>
							<AppCard />
							<AppCard />
							<AppCard />
						</div>

					</div>

					<div className='w-full'>
						<p className='text-blk text-4xl lg:text-5xl font-bold pt-[48px] pb-[12px] lg:pb-[24px]'>Wanted to set an appointment?</p>

						{/* APPOINTMENT FORM */}
						<div>
							{/* DOCUMENT OR APPAREL CHOICE */}
							<div className='flex flex-col lg:flex-row gap-x-[24px] w-full h-fit' style={doc || aprl ? { display: "none" } : { display: "flex" }}>
								<AppSelect name="Document" onClick={docClick} />
								<AppSelect name="Apparel" onClick={aprlClick} />
							</div>

							{/* DOOCUMENT FORM - NEED BACKEND */}
							<div style={doc ? { display: "block" } : { display: "none" }}>
								<AppForm name="Document" onClick={backClick} />
							</div>

							{/* APPAREL FORM - NEED BACKEND */}
							<div style={aprl ? { display: "block" } : { display: "none" }}>
								<AppForm name="Apparel" onClick={backClick} />
							</div>
						</div>

					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Appointments