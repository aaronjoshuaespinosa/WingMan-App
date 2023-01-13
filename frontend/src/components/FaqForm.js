import React, { useState } from 'react';
import { useFaqsContext } from '../hooks/useFaqsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const FaqForm = () => {
    const { dispatch } = useFaqsContext();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const upvote = 0
    const [error, setError] = useState('')

    const { user } = useAuthContext()
    const email = `${user.email}`
    const username = `${user.data.username}`


    const handleSubmit = async (e) => {
        e.preventDefault()
        const faq = { title, content, upvote, email, username }

        if (!user) {
            setError('You must be logged in.')
            return
        }

        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/FAQs`, {
            method: 'POST',
            body: JSON.stringify(faq),
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
            setTitle('')
            setContent('')
            setError(null)
            dispatch({ type: 'CREATE_FAQ', payload: json })
        }
    }

    const clear = async (e) => {
        setTitle('')
        setContent('')
        setError(null)
    }

    return (
        <div className="w-full border-[2px] border-blk text-blk rounded-[3px] p-[24px] mb-[12px] bg-light-lgry">
            <h3 className='font-bold text-2xl pb-2'>Create Question</h3>

            {/* FORM INPUTS */}
            <div className='flex flex-col gap-y-[12px]'>
                <input
                    type="text"
                    placeholder="Question Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="p-[12px] border-blk border-[2px] rounded-[3px]"
                />

                <textarea
                    type="text"
                    placeholder="Do you have something in mind?"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    className="resize-y p-[12px] border-blk border-[2px] rounded-[3px] h-[10rem] lg:h-full"
                />
            </div>

            {/* BUTTONS */}
            <div className='flex flex-row items-center'>
                {error && <div className="error w-full mt-[12px]">{error}</div>}
                <div className='flex gap-x-[12px] mt-[12px] w-full justify-end'>
                    <button className='px-5 py-2 font-bold bg-wht border-[2px] border-blk text-blk rounded-[3px] hover:bg-light-lgry transition-all ease-in-out duration-[0.1s] hover:drop-shadow-hoverShadow' onClick={clear}>Clear</button>
                    <button className='px-5 py-2 font-bold bg-orng border-[2px] border-blk text-blk rounded-[3px] hover:bg-light-orng transition-all ease-in-out duration-[0.1s] hover:drop-shadow-hoverShadow' onClick={handleSubmit}>Post</button>
                </div>
            </div>
        </div>
    )
}

export default FaqForm