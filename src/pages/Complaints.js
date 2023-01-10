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
				dsptch({type: 'SET_COMPLAINTS', payload: json})
			}
		}

		fetchComplaints()
	}, [dsptch])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space'>
				<ComplaintForm />
				{complaints && complaints.map((complaint) => (
					<ComplaintDetails key={complaint.id} complaint={complaint} />
				))}
			</div>
		</>
	)
}

export default Complaints