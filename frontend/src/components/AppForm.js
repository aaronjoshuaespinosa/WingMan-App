import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { useAppointmentsContext } from '../hooks/useAppointmentsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const AppForm = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const status = "Pending"
    const { name, onClick } = props
    const { dispatch } = useAppointmentsContext()
    const { user } = useAuthContext()
    const type = `${name}`
    const email = `${user.email}`
    const fullName = `${user.data.firstName}` + ` ` + `${user.data.lastName}`
    const username = `${user.data.username}`
    const studentNumber = `${user.data.studentNumber}`
    const today = new Date()
    const yyyy = today.getFullYear()
    let mm = today.getMonth() + 1
    let dd = today.getDate()

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    let dateToday = yyyy + '-' + mm + '-' + dd

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in.');
            return
        }

        const appointment = { title, description, status, type, email, fullName, username, studentNumber }
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/appointments`, {
            method: 'POST',
            body: JSON.stringify(appointment),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError('Please fill the empty fields.')
        }

        if (response.ok) {
            setTitle('')
            setDescription('')
            setError(null)
            dispatch({ type: 'CREATE_APPOINTMENT', payload: json })
        }
    }

    const clear = async (e) => {
        setTitle('')
        setDescription('')
    }

    return (
        <>
            <div className='bg-light-lgry w-full h-full border-[2px] border-blk rounded-[3px] p-[24px] relative'>

                {/* TITLE */}
                <p className='text-blk font-bold text-3xl mb-[12px]'>Make an appointment: <span className='uppercase'>{name}</span></p>
                <div className='flex flex-col gap-y-[12px] relative'>

                    {user &&
                        <div>
                            <p className='font-bold uppercase'>create an appointment for</p>
                            <p className='text-sm truncate'>Full Name: {user.data.firstName} {user.data.lastName}</p>
                            <p className='text-sm'>Student Number: {user.data.studentNumber}</p>
                            <p className='text-sm truncate'> CvSU Email: {user.email}</p>
                        </div>}

                    {/* APPOINTMENT TITLE */}
                    <div className='flex flex-row gap-x-[12px]'>
                        <input
                            className="w-full p-[12px] border-blk border-[2px] rounded-[3px]"
                            placeholder="Appointment Title (Ex. Certificate of Grades)"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title} />

                        <div className='flex flex-row gap-x-[12px]'>
                            <input
                                type="date"
                                min={dateToday}
                                value={dateToday}
                                required
                                className="w-full p-[12px] border-blk border-[2px] rounded-[3px]" />

                            <input
                                type="time"
                                min="10:00"
                                max="16:00"
                                value="10:00"
                                required
                                className="w-full p-[12px] border-blk border-[2px] rounded-[3px]"></input>
                        </div>
                    </div>


                    {/* APPOINTMENT DESCRIPTION */}
                    <textarea className="resize-y p-[12px] border-blk border-[2px] rounded-[3px] h-[12.75rem] lg:h-[6.75rem]" placeholder="Description (Include date and time of appointment for approval)" type="text" onChange={(e) => setDescription(e.target.value)} value={description} />

                </div>

                <div className='flex flex-row items-center h-full w-full]'>

                    {/* BACK BUTTON - NO NEED BACKEND */}
                    <p className='w-full h-full mt-[12px] font-bold hover:underline cursor-pointer' onClick={onClick}>← Appointment Type</p>

                    <div className='flex gap-x-[12px] mt-[12px] w-full h-full justify-end'>

                        {/* CLEAR BUTTON */}
                        <button className='px-5 py-2 font-bold bg-wht border-[2px] border-blk text-blk rounded-[3px] hover:drop-shadow-hoverShadow hover:bg-light-lgry transition-all ease-in-out duration-[0.1s]' onClick={clear}>Clear</button>

                        {/* POST BUTTON */}
                        <button className='px-5 py-2 font-bold bg-orng border-[2px] border-blk text-blk rounded-[3px] hover:drop-shadow-hoverShadow hover:bg-light-orng transition-all ease-in-out duration-[0.1s]' onClick={handleSubmit}>Submit</button>

                    </div>

                </div>
                {error && <div>{error}</div>}
            </div>
        </>
    )
}

export default AppForm