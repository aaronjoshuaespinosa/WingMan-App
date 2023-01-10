import React, { useEffect, useState } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useComplaintsContext } from '../hooks/useComplaintsContext'
import ComplaintDetails from '../components/ComplaintDetails'
import ComplaintForm from '../components/ComplaintForm'

const Complaints = () => {

	// const [complaints, setComplaints] = useState(null)
	const { complaints, dispatch: dsptch } = useComplaintsContext()
	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))

		const fetchComplaints = async () => {
			const response = await fetch('/api/complaints')
			const json = await response.json()

			if (response.ok) {
				dsptch({ type: 'SET_COMPLAINTS', payload: json })
			}
		}

		fetchComplaints()
	}, [dsptch])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space'>
				<div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[2.5rem] lg:pt-32 lg:pb-24 z-10'>
					<h1>Are you experiencing an academic invoncenience? Create a Complaint!</h1>
					<ComplaintForm />
					{complaints && complaints.map((complaint) => (
						<ComplaintDetails key={complaint.id} complaint={complaint} />
					))}
				</div>
			</div>
		</>
	)
}

export default Complaints