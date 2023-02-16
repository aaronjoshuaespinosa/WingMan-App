import React, { useState } from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { AiTwotoneDelete } from "react-icons/ai";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { FaCommentAlt } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { useFaqsContext } from '../hooks/useFaqsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const FaqDetails = (props) => {

    const { faq, onClick } = props

    const { dispatch } = useFaqsContext()
    const { user } = useAuthContext()
    const email = `${user.email}`
    const username = `${user.data.username}`
    const [description, setDescription] = useState('')
    const comments = [{ username, email, description }]
    const [error, setError] = useState('')

    const fetchFAQs = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/FAQs`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json();

        if (response.ok) {
            // setFAQs(json)
            dispatch({ type: 'SET_FAQS', payload: json })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const faqs = { comments }

        if (!user) {
            setError('You must be logged in.')
            return
        }

        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/FAQs/` + faq._id, {
            method: 'PATCH',
            body: JSON.stringify(faqs),
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
            setDescription('')
            setError(null)
            fetchFAQs()
        }
    }

    //UPVOTES
    let upvote = [{ email }]

    const upClick = async (e) => {
        e.preventDefault()
        let ups = { upvote }
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/FAQs/` + faq._id, {
            method: 'PATCH',
            body: JSON.stringify(ups),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json();
        if (response.ok) {
            fetchFAQs()
        }
    }

    return (
        <div className="FAQ-details w-full bg-light-wht border-blk border-[2px] rounded-[3px] my-[12px] flex flex-row">
            <div className='topFAQ flex flex-col justify-between h-full w-full'>
                <div className='leftCard flex flex-col p-[24px]'>
                    <div className='nameAndDate flex flex-row align-center justify-between'>
                        <div className='flex flex-row gap-2'>
                            <p className='text-blk text-sm'>Posted by <span className='hover:underline cursor-pointer'>{faq.username}</span></p>
                            <p className='text-light-gry text-sm'>•</p>
                            <p className='text-light-gry text-xs place-self-center'>{formatDistanceToNowStrict(new Date(faq.createdAt), { addSuffix: true })}</p>
                        </div>

                        <div className='flex flex-row gap-x-2 items-center justify-center'>
                            <button onClick={upClick}><ImArrowUp />
                            </button> <ImArrowDown />
                        </div>
                    </div>

                    <div className='titleAndContent pt-1 pb-1'>
                        <h4 className='text-2xl font-bold pb-3'>{user && faq.title}</h4>
                        <p className='break-words'>{user && faq.content}</p>
                    </div>
                </div>

                <div className='botMenus flex flex-row justify-between gap-x-7 bg-wht px-[24px] py-3 border-t-[2px] border-t-light-lgry w-full'>
                    <div className='flex w-full gap-x-4'>
                        <div className='flex flex-row h-full justify-center items-center gap-x-1'>
                            <ImArrowUp />
                            <p>{faq.upvote.length}</p>
                        </div>

                        <div className='flex flex-row h-full justify-center items-center gap-x-1'>
                            <FaCommentAlt />
                            <p>{faq.comments.length}</p>
                        </div>
                    </div>

                    {/* BASURAHAN */}
                    {faq.username === user.data.username && <button onClick={() => { onClick(faq._id) }}><AiTwotoneDelete className='hover:text-red transition-all ease-in-out duration-[0.2s] text-xl' /></button>}

                </div>

                {/*COMMENT SECTION*/}
                <div className='px-[24px] py-[12px] bg-light-lgry border-t-blk border-t-[2px]'>
                    <p className='font-bold text-sm'>COMMENTS</p>
                    <hr className='h-[2px] bg-light-gry my-2' />
                    <div className='flex flex-col gap-y-2'>
                        {faq.comments.map(({ username, description }) => {
                            return (
                                <p key={username} className="text-blk cursor-default"><span className='font-bold cursor-default hover:underline'>{username === `${user.data.username}` ? "You" : `${username}`}:</span>&nbsp;&nbsp;{description}</p>)
                        })}
                        {faq.comments.length > 0 ? null : <p className='text-light-gry'>No comments yet</p>}

                        {user && <form onSubmit={(handleSubmit)} className="w-full">
                            <div className='flex w-full'>
                                <input
                                    type="text"
                                    placeholder="Add a comment"
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    value={description}
                                    className="p-[6px] border-blk border-[2px] rounded-l-[3px] w-full"
                                />
                                <button className='bg-orng border-blk border-y-[2px] border-r-[2px] rounded-r-[3px] px-4'><MdSend className='text-xl' /></button>
                            </div>
                        </form>}
                        {error && <div>{error}</div>}
                    </div>
                </div>

            </div>

            {/* <div className='rightCard flex justify-center align-center px-[8px] pt-[12px] bg-light-lgry border-l-[2px] border-blk'>
                <div className='flex flex-col align-center gap-y-3 text-lg'>
                    <ImArrowUp className='hover:text-orng cursor-pointer transition-all ease-in-out duration-[0.2s]' />
                    <ImArrowDown className='hover:text-orng cursor-pointer transition-all ease-in-out duration-[0.2s]' />
                </div>
            </div> */}

        </div>
    )
}

export default FaqDetails