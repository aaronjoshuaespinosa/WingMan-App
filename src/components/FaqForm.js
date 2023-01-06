import React, { useState } from 'react';
import { useFaqsContext } from '../hooks/useFaqsContext'

const FaqForm = () => {
    const { dispatch } = useFaqsContext();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState('')

    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const faq = {title, content}
        const response = await fetch('/api/FAQs', {
            method: 'POST',
            body: JSON.stringify(faq),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setContent('')
            setError(null)
            setEmptyFields([])

            console.log('New question added.', json)
            dispatch({type: 'CREATE_FAQ', payload: json})
        }

    }

    return(
        <form className="create" onSubmit={(handleSubmit)}>
            <h3>Add a New Question</h3>
            
            <label>Thread Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            
            <label>Content:</label>
            <input 
                type="text"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                className={emptyFields.includes('content') ? 'error' : ''}
            />

            <button>Add Question</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default FaqForm