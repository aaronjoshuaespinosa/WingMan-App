import React, { useEffect } from 'react'
import { AdminNav } from '../components'
import { useComplaintsContext } from '../hooks/useComplaintsContext'
import ComplaintDetails from '../components/ComplaintDetails'
import { useAuthContext } from '../hooks/useAuthContext'

const AdminComp = () => {
	const { complaints, dispatch: dsptch } = useComplaintsContext()
	const { user } = useAuthContext()

	useEffect(() => {
		const fetchComplaints = async () => {
			const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/admin/complaints`, {
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
		<div className='w-full h-auto font-space text-blk'>
			<AdminNav />
			<div className='pt-12 px-40'>
				<div className='flex flex-col gap-y-4'>
					{/* DISPLAY COMPLAINTS SUBMITTED BY USER*/}
					<p className='text-orng font-bold pt-3 text-lg lg:text-xl'>YOUR COMPLAINTS</p>
					<div
						className='flex flex-col gap-y-3'>
						{complaints && complaints.map((complaint, i) => (
							<div>
								<ComplaintDetails key={complaint.id} complaint={complaint} index={i} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminComp