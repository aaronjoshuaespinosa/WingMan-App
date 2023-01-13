import React, { useState } from 'react'
import { useAppointmentsContext } from '../hooks/useAppointmentsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const AppForm = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const status = "Pending"
    const { name, onClick } = props
    const type = `${name}`

    const { dispatch } = useAppointmentsContext()
    const { user } = useAuthContext()
    const email = `${user.email}`

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in.');
            return
        }

        const appointment = { title, description, status, type, email }
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
            dispatch({type: 'CREATE_APPOINTMENT', payload: json})
        }
    }

    const clear = async (e) => {
        setTitle('')
        setDescription('')
    }

    return (
        <>
            <div className='bg-light-lgry w-full h-full border-[2px] border-blk rounded-[3px] p-[24px]'>

                {/* TITLE */}
                <p className='text-blk font-bold text-3xl mb-[12px]'>Make an appointment: {name}</p>
                <div className='flex flex-col gap-y-[12px]'>

                    {/* APPOINTMENT TITLE */}
                    <input className="w-full p-[12px] border-blk border-[2px] rounded-[3px]" placeholder="Appointment Title" type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>

                    {/* APPOINTMENT DESCRIPTION */}
                    <textarea className="resize-y p-[12px] border-blk border-[2px] rounded-[3px] h-[12.75rem] lg:h-[12.75rem]" placeholder="Description"  type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>

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