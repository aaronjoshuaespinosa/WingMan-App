import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { NACard, Footer, Greeting, AppCard } from '../components'
import ComplaintDetails from '../components/ComplaintDetails'
import { motion } from 'framer-motion'
import { firstNews } from '../constants'
import { useAuthContext } from '../hooks/useAuthContext'
import { useAppointmentsContext } from '../hooks/useAppointmentsContext'
import { useComplaintsContext } from '../hooks/useComplaintsContext'
import { FaUser, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { IoIosAlert } from "react-icons/io";

const Dashboard = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const appointmentsLink = () => {
		navigate("/appointments")
	}

	const faqsLink = () => {
		navigate("/faqs")
	}

	const complaintLink = () => {
		navigate("/complaint-system")
	}

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	const { user } = useAuthContext()
	const { appointments, dispatch: dsptchA } = useAppointmentsContext()
	const { complaints, dispatch: dsptchC } = useComplaintsContext()

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))
		const fetchAppointments = async () => {
			const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/appointments`, {
				headers: {
					'Authorization': `Bearer ${user.token}`
				}
			})
			const appRes = await response.json()
			if (response.ok) {
				dsptchA({ type: 'SET_APPOINTMENTS', payload: appRes })
			}
		}
		fetchAppointments()
	}, [dsptchA, user])

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))

		const fetchComplaints = async () => {
			const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/complaints`, {
				headers: {
					'Authorization': `Bearer ${user.token}`
				}
			})
			const compRes = await response.json()

			if (response.ok) {
				dsptchC({ type: 'SET_COMPLAINTS', payload: compRes })
			}
		}

		fetchComplaints()
	}, [dsptchC, user])

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))
	}, [])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space z-10 text-blk'>
				<Greeting />
				<div className='flex flex-row px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[2.5rem] lg:pt-32 lg:pb-24 gap-x-[24px] z-10'>

					<div className='flex flex-col gap-y-[24px] w-full lg:w-5/6'>
						{/* USER DETAILS */}
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							transition={{ delay: 0 * 0.1 }}
							whileInView={{ opacity: 100, y: 0 }}
							className='gap-y-5 flex flex-col'>
							<p className='font-bold text-5xl'>{user.data.firstName} {user.data.lastName}</p>
							<hr className='bg-blk py-[0.02rem]' />

							<div className='flex flex-col gap-y-2'>
								<div className='flex flex-row items-center gap-x-[6px] font-bold'><FaUser /><p>@{user.data.username}</p></div>
								<div className='flex flex-row items-center gap-x-[6px] font-bold'><FaInfoCircle /><p>{user.data.studentNumber}</p></div>
								<div className='flex flex-row items-center gap-x-[6px] font-bold'><FaEnvelope /><p>{user.data.email}</p></div>
							</div>
						</motion.div>

						{/* USER ACTIVITY */}
						{/* <div className='flex flex-col'>
							<p className='font-bold text-lg text-orng pb-3'>YOUR ACTIVITY</p>
							<div className='flex bg-wht border-blk border-[2px] rounded-[3px] p-10'>
								<div className='flex flex-row items-center justify-center w-full gap-x-40'>
									<div className='flex flex-col items-center justify-center font-bold'>
										<p className='text-xl text-center'>FAQs<br />Posted</p>
										<p className='text-8xl text-orng'>%</p>
									</div>

									<div className='flex flex-col items-center justify-center font-bold'>
										<p className='text-xl text-center'>Appointments<br />Requested</p>
										<p className='text-8xl text-orng'>%</p>
									</div>

									<div className='flex flex-col items-center justify-center font-bold'>
										<p className='text-xl text-center'>Complaints<br />Sent</p>
										<p className='text-8xl text-orng'>%</p>
									</div>
								</div>
							</div>
						</div> */}

						{/* LATEST APPOINTMENT */}
						<div className='flex flex-col'>
							<motion.p
								initial={{ opacity: 0, y: 15 }}
								transition={{ delay: 1 * 0.1 }}
								whileInView={{ opacity: 100, y: 0 }}
								className='font-bold text-lg text-orng'>LATEST APPOINTMENT</motion.p>
							<motion.hr
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 100, y: 0 }}
								transition={{ delay: 2 * 0.1 }}
								className='bg-blk py-[0.02rem]' />
							<div>
								{appointments && appointments.map((appointment, i) => {
									return (i === 0
										? <motion.div
											initial={{ opacity: 0, y: 15 }}
											transition={{ delay: 3 * 0.1 }}
											whileInView={{ opacity: 100, y: 0 }}
										>
											<AppCard key={appointment.id} appointment={appointment} index={i} />
										</motion.div>
										: null)
								})}
								{appointments?.length > 0
									? null
									: <div className='flex flex-col w-full items-center justify-center py-3'>
										<IoIosAlert className='text-8xl text-light-gry' />
										<p className='font-bold'>You don't have any appointments yet.</p>
										<p>Add an appointment? <span className='hover:underline hover:text-orng cursor-pointer'>Click here</span></p>
									</div>}
							</div>
						</div>

						{/* LATEST COMPLAINT */}
						<div className='flex flex-col'>
							<motion.p
								initial={{ opacity: 0, y: 15 }}
								transition={{ delay: 4 * 0.1 }}
								whileInView={{ opacity: 100, y: 0 }}
								className='font-bold text-lg text-orng'>LATEST COMPLAINT</motion.p>
							<motion.hr
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 100, y: 0 }}
								transition={{ delay: 5 * 0.1 }}
								className='bg-blk py-[0.02rem]' />
							<div>
								{complaints && complaints.map((complaint, i) => {
									return (i === 0
										? <motion.div
											initial={{ opacity: 0, y: 15 }}
											animate={{ opacity: 100, y: 0 }}
											transition={{ delay: 6 * 0.1 }}
										>
											<ComplaintDetails key={complaint.id} complaint={complaint} index={i} />
										</motion.div>
										: null)
								})}
								{complaints?.length > 0
									? null
									: <div className='flex flex-col w-full items-center justify-center py-3'>
										<IoIosAlert className='text-8xl text-light-gry' />
										<p className='font-bold'>You don't have any complaints yet.</p>
										<p>Send a complaint? <span className='hover:underline hover:text-orng cursor-pointer'>Click here</span></p>
									</div>}
							</div>
						</div>
					</div>

					<div className='w-2/6 hidden lg:block'>
						<motion.p
							initial={{ opacity: 0, y: 15 }}
							transition={{ delay: 0 * 0.1 }}
							whileInView={{ opacity: 100, y: 0 }}
							className='font-bold text-lg text-orng pb-[12px]'>SHORTCUTS</motion.p>

						<div className='flex flex-col gap-y-[12px] pb-[24px]'>
							<motion.div
								initial={{ opacity: 0, y: 15 }}
								transition={{ delay: 1 * 0.1 }}
								whileInView={{ opacity: 100, y: 0 }}
								className='flex flex-row justify-between items-center bg-wht border-blk border-[2px] rounded-[3px] font-bold text-xl p-[12px] cursor-pointer hover:bg-light-lgry' onClick={faqsLink}>
								<p>Create FAQ</p>
								<p className='text-2xl'>→</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								transition={{ delay: 2 * 0.1 }}
								whileInView={{ opacity: 100, y: 0 }}
								className='flex flex-row justify-between items-center bg-wht border-blk border-[2px] rounded-[3px] font-bold text-xl p-[12px] cursor-pointer hover:bg-light-lgry' onClick={appointmentsLink}>
								<p>Add Appointment</p>
								<p className='text-2xl'>→</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								transition={{ delay: 3 * 0.1 }}
								whileInView={{ opacity: 100, y: 0 }}
								className='flex flex-row justify-between items-center bg-wht border-blk border-[2px] rounded-[3px] font-bold text-xl p-[12px] cursor-pointer hover:bg-light-lgry' onClick={complaintLink}>
								<p>Send Complaint</p>
								<p className='text-2xl'>→</p>
							</motion.div>
						</div>

						<motion.hr
							initial={{ opacity: 0, y: 15 }}
							transition={{ delay: 4 * 0.1 }}
							whileInView={{ opacity: 100, y: 0 }}
							className='bg-blk py-[0.02rem] mb-[24px]' />

						<motion.p
							initial={{ opacity: 0, y: 15 }}
							transition={{ delay: 5 * 0.1 }}
							animate={{ opacity: 100, y: 0 }}
							className='mb-[12px] w-full bg-orng p-[12px] border-blk border-[2px] rounded-[3px] text-wht text-center font-bold'>RECOMMENDED FOR YOU
						</motion.p>

						<div className='flex w-full'>
							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 100, y: 0 }}
								transition={{ delay: 6 * 0.1 }}
								className='gap-y-2 flex flex-col w-full'>
								{firstNews.map((announcements) => (
									<div>
										<NACard key={announcements.id} name={announcements.name} author={announcements.author} link={announcements.link} img={announcements.img} bool={announcements.new} />
									</div>
								))}
							</motion.div>
						</div>
					</div>

				</div>

				<Footer />

			</div>
		</>
	)
}

export default Dashboard