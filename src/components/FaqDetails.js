import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { AiTwotoneDelete } from "react-icons/ai";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { useFaqsContext } from '../hooks/useFaqsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const FaqDetails = ({ faq }, props) => {

    const { onClick } = props

    const { dispatch } = useFaqsContext()
    const { user } = useAuthContext()
    const handleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch('/api/FAQs/' + faq._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({ type: 'DELETE_FAQ', payload: json })
        }
    }
    return (
        <div className="FAQ-details w-full bg-light-wht border-blk border-[2px] rounded-[3px] my-[12px] flex flex-row">
            <div className='topFAQ flex flex-col justify-between h-full w-full'>
                <div className='leftCard flex flex-col'>
                    <div className='nameAndDate flex flex-row gap-2 m-[12px] align-center'>
                        <p className='text-blk text-sm hover:underline cursor-pointer'>Simpleng Tao</p>
                        <p className='text-light-gry text-sm'>•</p>
                        <p className='text-light-gry text-xs place-self-center'>{formatDistanceToNowStrict(new Date(faq.createdAt), { addSuffix: true })}</p>
                    </div>

                    <div className='titleAndContent pt-1 pb-7 mx-[12px]'>
                        <h4 className='text-2xl font-bold pb-3 break-words'>{user && faq.title}</h4>
                        <p className='break-words'>{user && faq.content}</p>
                    </div>
                </div>

                <div className='botMenus flex flex-row justify-between bg-light-lgry px-[12px] py-2 border-t-[2px] border-blk'>
                    <div className='flex flex-row align-center justify-center gap-x-1'>
                        <ImArrowUp />
                        <p className='text-sm'>{user && faq.upvote}</p>
                    </div>
                    <button onClick={onClick}><AiTwotoneDelete className='hover:text-red transition-all ease-in-out duration-[0.2s]' /></button>
                </div>
            </div>

            <div className='rightCard flex justify-center align-center px-[8px] pt-[12px] bg-light-lgry border-l-[2px] border-blk'>
                <div className='flex flex-col align-center gap-y-3 text-lg'>
                    <ImArrowUp className='hover:text-orng cursor-pointer transition-all ease-in-out duration-[0.2s]' />
                    <ImArrowDown className='hover:text-orng cursor-pointer transition-all ease-in-out duration-[0.2s]' />
                </div>
            </div>

        </div>
    )
}

export default FaqDetails