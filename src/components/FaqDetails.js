import React from 'react'
import { useFaqsContext } from '../hooks/useFaqsContext'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

const FaqDetails = ({ faq }) => {
    const { dispatch } = useFaqsContext()
    const handleClick = async () => {
        const response = await fetch('/api/FAQs/' + faq._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({ type: 'DELETE_FAQ', payload: json })
        }
    }
    return (
        <div className="FAQ-details w-full bg-light-lgry border-blk border-[2px] rounded-[3px] p-[12px] my-[12px]">
            <div className='flex flex-row gap-2'>
                <p className='text-blk text-sm hover:underline cursor-pointer'>Simpleng Tao</p>
                <p className='text-light-gry text-sm'>•</p>
                <p className='text-light-gry text-sm'>{formatDistanceToNowStrict(new Date(faq.createdAt), { addSuffix: true })}</p>
            </div>
            <div className=''>
                <h4 className='text-2xl font-bold'>{faq.title}</h4>
                <p className='select-none'>{faq.content}</p>
            </div>
            <p>Upvotes: {faq.upvote}</p>
            <button onClick={handleClick}>delete</button>
        </div>
    )
}

export default FaqDetails