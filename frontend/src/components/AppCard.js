import React, { useState } from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { MdSend } from "react-icons/md";
import { useAuthContext } from '../hooks/useAuthContext'
import { useAppointmentsContext } from '../hooks/useAppointmentsContext'

const AppCard = (props) => {

    const { appointment, index } = props
    const { dispatch } = useAppointmentsContext()

    const { user } = useAuthContext()
    const email = `${user.email}`
    const username = `${user.data.username}`
    const [content, setContent] = useState('')
    const messages = [{ username, email, content }]
    const [error, setError] = useState('')

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
            <div className='flex flex-row'>

                <div className='flex justify-center items-center pr-3 lg:pr-5 w-[3rem]' style={window.location.pathname === "/dashboard" ? { display: "none" } : { display: "flex" }}>
                    {/* INDEX NUNG ENTRY, KUNG PANG-ILAN NA APPOINTMENT */}
                    <p className='text-orng font-bold text-3xl'>0{index + 1}</p>
                </div>

                <div className='flex flex-col lg:flex-col bg-light-lgry border-r-blk border-r-[2px] border-l-orng border-l-[5px] border-t-blk border-t-[2px] border-b-blk border-b-[2px] w-full cursor-pointer'>

                    <div className='flex justify-between items-center w-full p-[12px]'>

                        {/* APPOINTMENT TYPE + APPOINTMENT TITLE */}
                        <p className='w-[50%] lg:w-auto underline font-bold cursor-pointer uppercase hover:text-orng transition-all ease-in-out duration-[0.2s]'>{appointment.title}</p>

                        {/* STATUS */}
                        <div className='w-[50%] lg:w-auto flex flex-col lg:flex-row gap-x-2 font-bold select-none text-right lg:text-auto'>

                            {/* APPOINTMENT TYPE */}
                            <p>Type: {appointment.type}</p>

                            {/* LINE */}
                            <p className='hidden lg:block'>|</p>

                            {/* APPOINTMENT DATE */}
                            <p>Date: {appointment.date}</p>

                            {/* LINE */}
                            <p className='hidden lg:block'>|</p>

                            {/* APPOINTMENT TIME */}
                            <p>Time: {appointment.time}</p>

                            {/* LINE */}
                            <p className='hidden lg:block'>|</p>

                            {/* APPOINTMENT STAUS */}
                            <p>Status: {appointment.status}</p>
                        </div>

                    </div>

                    {/* DESCRIPTION */}
                    <div className='py-3 bg-wht p-[12px]'>
                        <p>{appointment.description}</p>
                        <p className='text-sm text-light-gry'>{formatDistanceToNowStrict(new Date(appointment.createdAt), { addSuffix: true })}</p>
                    </div>

                    {/*MESSAGE SECTION*/}
                    <div className='p-[12px] bg-light-lgry border-t-light-gry border-t-[1px]'>
                        <p className='font-bold text-sm'>Messages</p>
                        <hr className='h-[2px] bg-light-gry my-2' />
                        <div>
                            {appointment.messages.map(({ username, content }) => (
                                <p key={username} className="text-blk cursor-default"><span className='font-bold cursor-default hover:underline'>{username === `${user.data.username}` ? "You" : `${username}`}:</span>&nbsp;&nbsp;{content}</p>
                            ))}
                            {appointment.messages.length > 0 ? null : <p className='text-light-gry'>No messages yet</p>}
                        </div>

                        {user && <form onSubmit={(handleSubmit)} className="w-full">
                            <div className='flex w-full pt-[12px]'>
                                <input
                                    type="text"
                                    placeholder="Send a message to CvSU Admin..."
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                    value={content}
                                    className="p-[6px] border-blk border-[2px] rounded-l-[3px] w-full"
                                />
                                <button className='bg-orng border-blk border-y-[2px] border-r-[2px] rounded-r-[3px] px-4'><MdSend className='text-xl' /></button>
                            </div>
                        </form>}
                        {error && <div>{error}</div>}
                    </div>
                </div>



            </div>
        </>
    )
}

export default AppCard