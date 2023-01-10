import React, { useState } from 'react'
import { useComplaintsContext } from '../hooks/useComplaintsContext'

const ComplaintForm = () => {
    const { dispatch } = useComplaintsContext()
    
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [recipient, setRecipient] = useState('')
    const [error, setError] = useState('')
    const status = "Pending"

    const handleSubmit = async (e) => {
        e.preventDefault()

        const complaint = {subject, content, recipient, status}

        const response = await fetch('/api/complaints', {
            method: 'POST',
            body: JSON.stringify(complaint),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError('Please fill the empty fields')
        }

        if(response.ok) {
            setSubject('')
            setContent('')
            setRecipient('')
            setError(null)

            dispatch({type: 'CREATE_COMPLAINT', payload: json})
        }
    }
    return (
        <div>
            <form onSubmit={(handleSubmit)}>
                <h1>Are you experiencing an academic invoncenience? Create a Complaint!</h1>
                <label>Complaint Subject:</label>
                <input 
                    type="text"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className=""
                />

                <label>Complaint Description</label>
                <input
                    type="text"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    className=""
                />

                <label>Recipient: </label>
                <input
                    type="text"
                    onChange={(e) => setRecipient(e.target.value)}
                    value={recipient}
                    className=""
                />

                <button>Submit</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}

export default ComplaintForm