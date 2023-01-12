import React from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import { useAuthContext } from '../hooks/useAuthContext'

const ComplaintDetails = ({ complaint }) => {
    const { user } = useAuthContext()
    return (
        <div className='my-[12px]'>
            {user && <h1>Subject: {complaint.subject}</h1>}
            {user && <p>Content: {complaint.content}</p>}
            {user && <p>Recipient: {complaint.recipient}</p>}
            {user && <p>Status: {complaint.status}</p>}
            {user && <p>{formatDistanceToNowStrict(new Date(complaint.createdAt), {addSuffix: true})}</p>}
        </div>
    )
}

export default ComplaintDetails