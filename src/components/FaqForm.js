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

        const faq = { title, content }
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
            dispatch({ type: 'CREATE_FAQ', payload: json })
        }

    }

    return (
        <div className="w-full border-[2px] border-blk rounded-[3px] p-[12px] bg-light-lgry">
            <h3 className='font-bold text-2xl pb-2'>Create Question</h3>

            <div className='flex flex-col gap-y-[12px]'>
                <input
                    type="text"
                    placeholder="Question Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className= "p-[12px] border-blk border-[2px] rounded-[3px]"
                />

                <textarea
                    type="text"
                    placeholder="Do you have something in mind?"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    className= "resize-y p-[12px] border-blk border-[2px] rounded-[3px]"
                />
            </div>

            <div>
                <button>Clear</button>
                <button>Post</button>
            </div>
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default FaqForm