import React from 'react'
import { useFaqsContext } from '../hooks/useFaqsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const FaqDetails = ({ faq }) => {
    const { dispatch } = useFaqsContext()
    const handleClick = async () => {
        const response = await fetch('/api/FAQs/' + faq._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok) {
            dispatch({type: 'DELETE_FAQ', payload: json})
        }
    }
    return (
        <div className="FAQ-details">
            <h4>{faq.title}</h4>
            <p>Content: {faq.content}</p>
            <p>{formatDistanceToNow(new Date(faq.createdAt), { addSuffix: true })}</p>
            <button onClick={handleClick}>delete</button>
        </div>
    )
}

export default FaqDetails