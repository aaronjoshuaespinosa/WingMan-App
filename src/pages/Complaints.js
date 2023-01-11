import React, { useEffect, useState } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useComplaintsContext } from '../hooks/useComplaintsContext'
import ComplaintDetails from '../components/ComplaintDetails'
import ComplaintForm from '../components/ComplaintForm'
import { Footer } from '../components'
import { useAuthContext } from '../hooks/useAuthContext'

const Complaints = () => {

	// const [complaints, setComplaints] = useState(null)
	const { complaints, dispatch: dsptch } = useComplaintsContext()
	const dispatch = useDispatch()
	const { user } = useAuthContext()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))

		const fetchComplaints = async () => {
			const response = await fetch('/api/complaints', {
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
					<h1>Are you experiencing an academic invoncenience? Create a Complaint!</h1>
					<ComplaintForm />
					{/* DISPLAY COMPLAINTS SUBMITTED BY USER*/}
					<h1>Your complaints: </h1>
					{complaints && complaints.map((complaint) => (
						<ComplaintDetails key={complaint.id} complaint={complaint} />
					))}
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Complaints