import React, { useEffect, useState } from 'react'
import { AppACard, Nothing } from '../components'
import { useAppointmentsContext } from '../hooks/useAppointmentsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { AdminNav, AdminFooter } from '../components'

const AdminApp = () => {

	const { appointments, dispatch: dsptch } = useAppointmentsContext()
	const { user } = useAuthContext()

	const [sort, setSort] = useState("ALL")

	const allClick = () => {
		setSort("All")
	}

	const pendClick = () => {
		setSort("Pending")
	}

	const appClick = () => {
		setSort("Approved")
	}

	const rejClick = () => {
		setSort("Rejected")
	}
	
	const compClick = () => {
		setSort("Completed")
	}

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
			<div className='pt-12 px-96'>
				<div className='flex flex-col gap-y-1'>

					{/* CATEGORIES */}
					<div className='flex flex-row justify-between py-5 font-bold text-blk text-lg'>
						<p className='cursor-pointer hover:underline' style={sort === "All" ? { color: "#FC5F1C" } : { color: "#1E1E1E" }} onClick={allClick}>ALL</p>
						<p className='cursor-pointer hover:underline' style={sort === "Pending" ? { color: "#FC5F1C" } : { color: "#1E1E1E" }} onClick={pendClick}>PENDING</p>
						<p className='cursor-pointer hover:underline' style={sort === "Approved" ? { color: "#FC5F1C" } : { color: "#1E1E1E" }} onClick={appClick}>APPROVED</p>
						<p className='cursor-pointer hover:underline' style={sort === "Rejected" ? { color: "#FC5F1C" } : { color: "#1E1E1E" }} onClick={rejClick}>REJECTED</p>
						<p className='cursor-pointer hover:underline' style={sort === "Completed" ? { color: "#FC5F1C" } : { color: "#1E1E1E" }} onClick={compClick}>COMPLETED</p>
					</div>

					{/* TITLE */}
					<div className='flex flex-row items-center w-full justify-center'>
						<p className='text-orng font-bold text-lg lg:text-2xl pb-3 uppercase'>------- {sort} APPOINTMENTS -------</p>
					</div>

					{/* CARDS - DITO MA-STORE YUNG DATA FROM USER */}
					<div className='flex flex-col gap-y-3'>
						{appointments && appointments.map((appointment, i) => (
							<di>
								<AppACard key={appointment.id} appointment={appointment} index={i} visible={sort} />
							</di>
						))}
					</div>

					<Nothing />
				</div>
			</div>
			<AdminFooter />
		</div>
	)
}

export default AdminApp