import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useComplaintsContext } from '../hooks/useComplaintsContext'
import ComplaintDetails from '../components/ComplaintDetails'
import ComplaintForm from '../components/ComplaintForm'
import { Footer, Greeting, Nothing } from '../components'
import { useAuthContext } from '../hooks/useAuthContext'
import { motion } from 'framer-motion'

const Complaints = () => {

	// const [complaints, setComplaints] = useState(null)
	const { complaints, dispatch: dsptch } = useComplaintsContext()
	const dispatch = useDispatch()
	const { user } = useAuthContext()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))

		const fetchComplaints = async () => {
			const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/complaints`, {
				headers: {
					'Authorization': `Bearer ${user.token}`
				}
			})
			const json = await response.json()

			if (response.ok) {
				dsptch({ type: 'SET_COMPLAINTS', payload: json })
			}
		}

		fetchComplaints()
	}, [dsptch, user])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space z-10'>
				<Greeting />
				<div className='px-[1.25rem] pt-20 pb-10 lg:pt-32 lg:pb-24 lg:pl-[22.5rem] lg:pr-[2.5rem] z-10'>

					<motion.p
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						className='text-orng text-4xl lg:text-5xl font-bold pb-[12px] uppercase'
					>send a complaint</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ delay: 1 * 0.1 }}
						className="flex flex-col gap-y-4">

						<ComplaintForm />

						{/* DISPLAY COMPLAINTS SUBMITTED BY USER*/}
						<p className='text-orng font-bold pt-3 text-lg lg:text-xl'>YOUR COMPLAINTS</p>
						<motion.div
							className='flex flex-col gap-y-3'>
							{complaints && complaints.map((complaint, i) => (
								<motion.div
									initial={{ opacity: 0, y: 15 }}
									animate={{ opacity: 100, y: 0 }}
									transition={{ delay: i * 0.1 }}
								>
									<ComplaintDetails key={complaint.id} complaint={complaint} index={i} />
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					<Nothing />

				</div>
				<Footer />
			</div>
		</>
	)
}

export default Complaints