import React, { useEffect } from 'react'
import { AppACard, Nothing } from '../components'
import { useAppointmentsContext } from '../hooks/useAppointmentsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { AdminNav } from '../components'

const AdminApp = () => {

	const { appointments, dispatch: dsptch } = useAppointmentsContext()
	const { user } = useAuthContext()

	useEffect(() => {
		const fetchAppointments = async () => {
			const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/admin/appointments`, {
				headers: {
					'Authorization': `Bearer ${user.token}`
				}
			})
			const json = await response.json()
			if (response.ok) {
				dsptch({ type: 'SET_APPOINTMENTS', payload: json })
			}
		}
		fetchAppointments()
	}, [dsptch, user])
	return (
		<div className='w-full h-auto font-space text-blk'>
			<AdminNav />
			<div className='pt-12 px-40'>
				<div className='flex flex-col gap-y-4'>
					{/* TITLE */}
					<div className='flex flex-row items-center w-full'>
						<p className='text-orng font-bold pt-3 text-lg lg:text-xl'>YOUR APPOINTMENTS</p>
					</div>

					{/* CARDS - DITO MA-STORE YUNG DATA FROM USER */}
					<div className='flex flex-col gap-y-3'>
						{appointments && appointments.map((appointment, i) => (
							<di>
								<AppACard  key={appointment.id} appointment={appointment} index={i} />
							</di>
						))}
					</div>

					<Nothing />
				</div>
			</div>
		</div>
	)
}

export default AdminApp