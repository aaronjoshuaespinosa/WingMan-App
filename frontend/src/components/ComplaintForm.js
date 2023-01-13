import React, { useState } from 'react'
import { useComplaintsContext } from '../hooks/useComplaintsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const ComplaintForm = () => {
    const { dispatch } = useComplaintsContext()
    const { user } = useAuthContext()

    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [recipient, setRecipient] = useState('')
    const [error, setError] = useState('')
    const status = "Pending"
    const email = `${user.email}`

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in.')
            return
        }

        const complaint = { subject, content, recipient, status, email }

        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/complaints`, {
            method: 'POST',
            body: JSON.stringify(complaint),
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
            setSubject('')
            setContent('')
            setRecipient('')
            setError(null)

            dispatch({ type: 'CREATE_COMPLAINT', payload: json })
        }
    }
    return (
        <div className='bg-light-lgry flex flex-col p-5 border-blk border-[2px] rounded-[3px]'>
            <h3 className='font-bold text-2xl pb-2'>Create Complaint</h3>
            <div>
                <form onSubmit={(handleSubmit)} className="flex flex-col gap-y-[12px] w-full">
                    <div className='flex w-full gap-x-[12px]'>
                        <div className='w-full'>
                            <input
                                type="text"
                                onChange={(e) => setSubject(e.target.value)}
                                value={subject}
                                className="w-full p-[12px] border-blk border-[2px] rounded-[3px]"
                                placeholder='Complaint Subject'
                            />
                        </div>

                        <div className='w-full'>
                            <input
                                type="text"
                                onChange={(e) => setRecipient(e.target.value)}
                                value={recipient}
                                className="w-full p-[12px] border-blk border-[2px] rounded-[3px]"
                                placeholder='Recipient'
                            />
                        </div>
                    </div>

                    <textarea
                        type="text"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        className="resize-y p-[12px] border-blk border-[2px] rounded-[3px] h-[10rem] lg:h-full"
                        placeholder='Complaint Description'
                    />

                    <div className='flex w-full justify-end'>
                        {error && <div className="error w-full mt-[12px]">{error}</div>}
                        <button className='px-5 py-2 font-bold bg-orng border-[2px] border-blk text-blk rounded-[3px] transition-all ease-in-out duration-[0.1s] hover:drop-shadow-hoverShadow'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ComplaintForm