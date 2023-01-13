import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useComplaintsContext } from '../hooks/useComplaintsContext'
import ComplaintDetails from '../components/ComplaintDetails'
import ComplaintForm from '../components/ComplaintForm'
import { Footer } from '../components'
import { useAuthContext } from '../hooks/useAuthContext'
import { GiHummingbird } from "react-icons/gi";
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
			const response = await fetch('https://wingman-app-api.vercel.app/api/complaints', {
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
			<div className='bg-wht absolute top-0 w-full font-space'>
				<div className='px-[1.25rem] pt-20 pb-10 lg:pl-[25.5rem] lg:pr-[5.5rem] lg:pt-32 lg:pb-24 xl:pl-[30.5rem] xl:pr-[10.5rem] z-10'>

					<motion.h1
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
					>Are you experiencing an academic invoncenience? Create a Complaint!</motion.h1>

					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ delay: 1 * 0.1 }}>
						<ComplaintForm />
						{/* DISPLAY COMPLAINTS SUBMITTED BY USER*/}
						<h1>Your complaints: </h1>
						<motion.div></motion.div>
						{complaints && complaints.map((complaint) => (
							<ComplaintDetails key={complaint.id} complaint={complaint} />
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ delay: 2 * 0.1 }}
						className='w-full flex flex-col justify-center items-center py-5 gap-y-5 text-light-gry'>
						<motion.div
							whileHover={{ y: [10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10] }}
							transition={{ duration: 40 }}
							className="cursor-pointer"
						>
							<GiHummingbird className='text-9xl hover:text-orng' />
						</motion.div>

						<p className='text-2xl font-bold'>~Nothing else follows~</p>
					</motion.div>

				</div>
				<Footer />
			</div>
		</>
	)
}

export default Complaints