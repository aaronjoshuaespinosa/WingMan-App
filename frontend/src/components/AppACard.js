import React, { useState } from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { useAuthContext } from '../hooks/useAuthContext'

const AppACard = (props) => {

    const { appointment, index, visible } = props
    const { user } = useAuthContext()
    const [error, setError] = useState('')
    let status

    const approveClick = async (e) => {
        status = "Approved"
        const appointments = { status }
        if (!user) {
            setError('You must be logged in.')
            return
        }
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/Appointments/` + appointment._id, {
            method: 'PATCH',
            body: JSON.stringify(appointments),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            window.location.reload()
        }
    }

    const rejectClick = async (e) => {
        status = "Rejected"
        const appointments = { status }
        if (!user) {
            setError('You must be logged in.')
            return
        }

        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/Appointments/` + appointment._id, {
            method: 'PATCH',
            body: JSON.stringify(appointments),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            window.location.reload()
        }
    }

    return (
        <>
            {user.email === "cvsu.admin@wingman.com" && <div className='flex flex-row pb-3' style={visible === appointment.status ? {display: "flex"} : visible === "All" ? {display: "flex"} : {display: "none", height: 0, width: 0, margin: 0, padding: 0}}>

                <div className='flex justify-center items-center pr-3 lg:pr-5 w-[3rem]'>
                    {/* INDEX NUNG ENTRY, KUNG PANG-ILAN NA APPOINTMENT */}
                    <p className='text-orng font-bold text-3xl'>0{index + 1}</p>
                </div>

                <div className='flex flex-col lg:flex-col bg-light-lgry border-r-blk border-r-[2px] border-l-orng border-l-[5px] border-t-blk border-t-[2px] border-b-blk border-b-[2px] w-full'>

                    <div className='flex justify-between items-center w-full p-[12px]'>

                        {/* APPOINTMENT TYPE + APPOINTMENT TITLE */}
                        <p className='w-[50%] lg:w-auto underline font-bold cursor-pointer uppercase hover:text-orng transition-all ease-in-out duration-[0.2s]'>{appointment.title}</p>

                        {/* STATUS */}
                        <div className='w-[50%] lg:w-auto flex flex-col lg:flex-row gap-x-2 font-bold select-none text-right lg:text-auto'>

                            {/* APPOINTMENT DATE - PLACEHOLDER MUNA */}
                            <p>Type: {appointment.type}</p>

                            {/* LINE */}
                            <p className='hidden lg:block'>|</p>

                            {/* APPOINTMENT TIME - PLACEHOLDER MUNA */}
                            <p>Status: {appointment.status}</p>
                        </div>

                    </div>

                    {/* DESCRIPTION */}
                    <div className='py-3 bg-wht p-[12px]'>
                        {user.data.email === "cvsu.admin@wingman.com" &&
                            <p className='font-bold'>REQUESTED BY<br />{appointment.fullName} - {appointment.studentNumber}<br />{appointment.email}</p>}
                        <p><br />{appointment.description}</p>
                        <p className='text-sm'>{formatDistanceToNowStrict(new Date(appointment.createdAt), { addSuffix: true })}</p>
                        <hr className='my-3 h-[0.15rem] bg-light-lgry' />
                        <div className='flex justify-end gap-x-5 text-orng font-bold'>
                            {user.data.email === "cvsu.admin@wingman.com" && <button onClick={approveClick} className="hover:underline">Approve</button>}
                            {user.data.email === "cvsu.admin@wingman.com" && <button onClick={rejectClick} className="hover:underline">Reject</button>}
                        </div>
                    </div>

                </div>

            </div>}
        </>
    )
}

export default AppACard