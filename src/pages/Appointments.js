import React, { useEffect, useState } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppCard, AppForm, AppSelect, Footer } from '../components'
import { useAppointmentsContext } from '../hooks/useAppointmentsContext'
import { GiFoldedPaper, GiClothes } from "react-icons/gi";
import { motion } from 'framer-motion'

const Appointments = () => {
	const dispatch = useDispatch()

	const { appointments, dispatch: dsptch } = useAppointmentsContext()

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
		const fetchAppointments = async () => {
			const response = await fetch('/api/appointments')
			const json = await response.json()
			if (response.ok) {
				dsptch({ type: 'SET_APPOINTMENTS', payload: json })
			}
		}
		fetchAppointments()
	}, [dsptch])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space'>
				<div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[3rem] lg:pt-40 lg:pb-10 z-10'>
					<div className='flex flex-col gap-y-4'>
						{/* TITLE */}
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							className='flex flex-row items-center w-full'>
							<p className='text-orng font-bold text-lg lg:text-xl'>YOUR APPOINTMENTS</p>
						</motion.div>

						{/* CARDS - DITO MA-STORE YUNG DATA FROM USER */}
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 1 * 0.1 }}
							className='flex flex-col gap-y-3'>
							{appointments && appointments.map((appointment, i) => (
								<motion.div
									initial={{ opacity: 0, y: 15 }}
									transition={{ delay: i * 0.1 }}
									whileInView={{ opacity: 100, y: 0 }}
								>
									<AppCard key={appointment.id} appointment={appointment} index={i} />
								</motion.div>
							))}
						</motion.div>

					</div>

					<div className='w-full'>
						<motion.p
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 2 * 0.1 }}
							className='text-blk text-4xl lg:text-5xl font-bold pt-[48px] pb-[12px] lg:pb-[24px]'>Wanted to set an appointment?</motion.p>

						{/* APPOINTMENT FORM */}
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 100, y: 0 }}
							transition={{ delay: 3 * 0.1 }}>
							{/* DOCUMENT OR APPAREL CHOICE */}
							<div className='flex flex-col lg:flex-row gap-x-[24px] w-full h-fit' style={doc || aprl ? { display: "none" } : { display: "flex" }}>
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									className="w-full">
									<AppSelect name="Document" icon={<GiFoldedPaper />} onClick={docClick} />
								</motion.div>

								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									className="w-full">
									<AppSelect name="Apparel" icon={<GiClothes />} onClick={docClick} />
								</motion.div>
							</div>

							{/* DOOCUMENT FORM - NEED BACKEND */}
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								style={doc ? { display: "block" } : { display: "none" }}>
								<AppForm name="Document" onClick={backClick} />
							</motion.div>

							{/* APPAREL FORM - NEED BACKEND */}
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								style={aprl ? { display: "block" } : { display: "none" }}>
								<AppForm name="Apparel" onClick={backClick} />
							</motion.div>
						</motion.div>

					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Appointments