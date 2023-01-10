import React from 'react'
import { useComplaintsContext } from '../hooks/useComplaintsContext'
import { formatDistanceToNowStrict } from 'date-fns'

const ComplaintDetails = ({ complaint }) => {
    const { dispatch } = useComplaintsContext()

    return (
        <div className='my-[12px]'>
            <h1>Subject: {complaint.subject}</h1>
            <p>Content: {complaint.content}</p>
            <p>Recipient: {complaint.recipient}</p>
            <p>Status: {complaint.status}</p>
            <p>{formatDistanceToNowStrict(new Date(complaint.createdAt), {addSuffix: true})}</p>
        </div>
    )
}

export default ComplaintDetails