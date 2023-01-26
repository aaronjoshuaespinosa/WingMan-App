import React, { useState } from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { useAuthContext } from '../hooks/useAuthContext'
import { MdSend } from "react-icons/md";
import { useAppointmentsContext } from '../hooks/useAppointmentsContext'

const AppACard = (props) => {

    const { appointment, index, visible } = props
    const { dispatch } = useAppointmentsContext()
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

    const completeClick = async (e) => {
        status = "Completed"
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
    const email = `${user.email}`
    const username = `${user.data.username}`
    const [content, setContent] = useState('')
    const messages = [{ username, email, content }]

    const fetchAppointments = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/appointments`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({ type: 'SET_APPOINTMENTS', payload: json })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const apps = { messages }

        if (!user) {
            setError('You must be logged in.')
            return
        }

        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/Appointments/` + appointment._id, {
            method: 'PATCH',
            body: JSON.stringify(apps),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json();

        if (!response.ok) {
            setError('Please fill the empty fields.')
        }
        if (response.ok) {
            setContent('')
            setError(null)
            fetchAppointments()
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
                            {user.data.email === "cvsu.admin@wingman.com" && <button onClick={completeClick} className="hover:underline">Mark as Completed</button>}
                        </div>
                    </div>

                    {/*MESSAGE SECTION*/}
                    {user && <form onSubmit={(handleSubmit)} className="w-full">
                            <div className='flex w-full'>
                                <input
                                    type="text"
                                    placeholder="Respond"
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                    value={content}
                                    className="p-[6px] border-blk border-[2px] rounded-l-[3px] w-full"
                                />
                                <button className='bg-orng border-blk border-y-[2px] border-r-[2px] rounded-r-[3px] px-4'><MdSend className='text-xl' /></button>
                            </div>
                        </form>}
                    <div className='px-[24px] py-[12px] bg-light-lgry border-t-light-gry border-t-[1px]'>
                        <p className='font-bold text-sm'>Messages</p>
                        <hr className='h-[2px] bg-light-gry my-2' />
                        <div>
                            {appointment.messages.map(({ username, content }) => (
                                <p key={username} className="text-blk cursor-default"><span className='font-bold cursor-default hover:underline'>{username}:</span>&nbsp;&nbsp;{content}</p>
                            ))}
                        {error && <div>{error}</div>}
                        </div>
                    </div>
                </div>

            </div>}
        </>
    )
}

export default AppACard