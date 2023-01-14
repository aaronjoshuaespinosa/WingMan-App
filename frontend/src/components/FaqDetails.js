import React, { useState } from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { AiTwotoneDelete } from "react-icons/ai";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
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
            dispatch({ type: '', payload: json })
        }
    }

    /*let upvote = `${faq.upvote}`
    
        const upClick = async() => {
            upvote += 1
            const faq = { upvote }
            const response = await fetch('/api/FAQs/' + faq._id, {
                method: 'PATCH',
                body: JSON.stringify(faq),
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
    
            const json = await response.json();
            if (response.ok) {
                dispatch({ type: 'SET_FAQS', payload: json })
            }
        } */

    return (
        <div className="FAQ-details w-full bg-light-wht border-blk border-[2px] rounded-[3px] my-[12px] flex flex-row">
            <div className='topFAQ flex flex-col justify-between h-full w-full'>
                <div className='leftCard flex flex-col p-[24px]'>
                    <div className='nameAndDate flex flex-row gap-2 align-center'>
                        <p className='text-blk text-sm hover:underline cursor-pointer'>{faq.username}</p>
                        <p className='text-light-gry text-sm'>•</p>
                        <p className='text-light-gry text-xs place-self-center'>{formatDistanceToNowStrict(new Date(faq.createdAt), { addSuffix: true })}</p>
                    </div>

                    <div className='titleAndContent pt-1 pb-7'>
                        <h4 className='text-2xl font-bold pb-3'>{user && faq.title}</h4>
                        <p className='break-words'>{user && faq.content}</p>
                        <p>{user.data.email === "cvsu.admin@wingman.com" &&
                            <p>Posted by: {faq.fullName} {faq.studentNumber} {faq.email}</p>}</p>
                    </div>
                </div>

                <div className='botMenus flex flex-row justify-between gap-x-7 bg-light-lgry px-[24px] py-3 border-t-[2px] border-blk w-full'>
                    <div className='flex w-full'>

                        {/* <ImArrowUp />
                        <p className='text-sm'>{user && faq.upvote}</p> */}

                        {user.data.email !== "cvsu.admin@wingman.com" && <form onSubmit={(handleSubmit)} className="w-full">
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

                    {/* BASURAHAN */}
                    {faq.username === user.data.username && <button onClick={() => { onClick(faq._id) }}><AiTwotoneDelete className='hover:text-red transition-all ease-in-out duration-[0.2s] text-xl' /></button>}

                </div>

                {/*COMMENT SECTION*/}
                <div className='px-[24px] py-[12px] bg-light-lgry border-t-light-gry border-t-[1px]'>
                    <p className='font-bold text-lg'>COMMENTS</p>
                    <div>
                        {faq.comments.map(({ username, description }) => (
                            <p key={username} className="text-light-gry cursor-default"><span className='font-bold cursor-default hover:underline'>{username}</span>&nbsp;&nbsp;{description}</p>
                        ))}
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