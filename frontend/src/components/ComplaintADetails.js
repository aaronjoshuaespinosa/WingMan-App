import React, { useState } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import { MdSend } from "react-icons/md";
import { useAuthContext } from '../hooks/useAuthContext'
import { useComplaintsContext } from '../hooks/useComplaintsContext'

const ComplaintDetails = (props) => {
    const { user } = useAuthContext()
    const { complaint, index } = props
    const { dispatch } = useComplaintsContext()
    const email = `${user.email}`
    const username = `${user.data.username}`
    const [content, setContent] = useState('')
    const messages = [{ username, email, content }]
    const [error, setError] = useState('')

    const fetchComplaints = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/Complaints`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'SET_COMPLAINTS', payload: json })
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const comps = { messages }

        if (!user) {
            setError('You must be logged in.')
            return
        }

        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/Complaints/` + complaint._id, {
            method: 'PATCH',
            body: JSON.stringify(comps),
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
            fetchComplaints()
        }
    }
    return (
        <>
            {user.data.email === "cvsu.admin@wingman.com" && <div className='flex flex-row'>

                {/* ENTRY INDEX */}
                <div className='flex justify-center items-center pr-3 lg:pr-5 w-[3rem]'>
                    <p className='text-orng font-bold text-3xl'>0{index + 1}</p>
                </div>

                <div className='flex flex-col lg:flex-col bg-light-lgry border-r-blk border-r-[2px] border-l-orng border-l-[5px] border-t-blk border-t-[2px] border-b-blk border-b-[2px] w-full cursor-pointer'>
                    <div className='flex flex-row justify-between w-full p-[12px]'>

                        {/* TITLE */}
                        <div className='w-[50%] lg:w-auto underline font-bold cursor-pointer hover:text-orng transition-all ease-in-out duration-[0.2s] flex flex-row px-1'>
                            {user && <p><span className='uppercase'>{complaint.recipient}</span>: {complaint.subject}</p>}
                        </div>

                        {/* OTHER DETAILS */}
                        <div className='w-[50%] lg:w-auto flex flex-col lg:flex-row gap-x-2 font-bold select-none text-right lg:text-auto'>

                            {/* TIME ELAPSED */}
                            {user && <p>{formatDistanceToNowStrict(new Date(complaint.createdAt), { addSuffix: true })}</p>}

                            {/* LINE */}
                            <p className='hidden lg:block'>|</p>

                            {/* STATUS */}
                            {user && <p>Status: {complaint.status}</p>}
                        </div>
                    </div>

                    {/* CONTENT */}
                    {user.data.email === "cvsu.admin@wingman.com" && <div className='bg-wht p-[12px]'>
                        {user && <p>{complaint.content}</p>}
                        <p>{user.data.email === "cvsu.admin@wingman.com" &&
                            <p>Submited by: {complaint.fullName} {complaint.studentNumber} {complaint.email}</p>}</p>
                    </div>}

                    {/*MESSAGE FORM*/}
                    {user && <form onSubmit={(handleSubmit)} className="w-full">
                            <div className='flex w-full'>
                                <input
                                    type="text"
                                    placeholder="Add a comment"
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                    value={content}
                                    className="p-[6px] border-blk border-[2px] rounded-l-[3px] w-full"
                                />
                                <button className='bg-orng border-blk border-y-[2px] border-r-[2px] rounded-r-[3px] px-4'><MdSend className='text-xl' /></button>
                            </div>
                        </form>}
                        {error && <div>{error}</div>}
                    {/*MESSAGE SECTION*/}
                    <div className='px-[24px] py-[12px] bg-light-lgry border-t-light-gry border-t-[1px]'>
                        <p className='font-bold text-sm'>MESSAGES</p>
                        <hr className='h-[2px] bg-light-gry my-2' />
                        <div>
                            {complaint.messages.map(({ email, content }) => (
                                <p key={email} className="text-blk cursor-default"><span className='font-bold cursor-default hover:underline'>{email}:</span>&nbsp;&nbsp;{content}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ComplaintDetails