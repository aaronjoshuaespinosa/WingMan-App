import React from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import { useAuthContext } from '../hooks/useAuthContext'

const ComplaintDetails = (props) => {
    const { user } = useAuthContext()
    const { complaint, index } = props
    return (
        <>
            <div className='flex flex-row'>

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
                    <div className='bg-wht p-[12px]'>
                        {user && <p>{complaint.content}</p>}
                        <p>{user.data.email === "cvsu.admin@wingman.com" && 
                        <p>Submited by: {complaint.fullName} {complaint.studentNumber} {complaint.email}</p>}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ComplaintDetails