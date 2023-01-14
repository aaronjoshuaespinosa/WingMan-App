import React, { useState } from 'react'

const FAQCard = (props) => {

    const { user, time, title, content } = props

    return (
        <div className="FAQ-details w-full bg-light-wht border-blk border-[2px] rounded-[3px] my-[12px] flex flex-row">
            <div className='topFAQ flex flex-col justify-between h-full w-full'>
                <div className='leftCard flex flex-col p-[24px]'>
                    <div className='nameAndDate flex flex-row gap-2 align-center'>
                        <p className='text-blk text-sm hover:underline cursor-pointer'>{user}</p>
                        <p className='text-light-gry text-sm'>•</p>
                        <p className='text-light-gry text-xs place-self-center'>{time}</p>
                    </div>
                </div>

                <div className='titleAndContent pt-1 pb-7'>
                    <h4 className='text-2xl font-bold pb-3 px-[24px]'>{title}</h4>
                    <p className='break-words px-[24px]'>{content}</p>
                </div>

                <div className='botMenus flex flex-row justify-between gap-x-7 bg-light-lgry px-[24px] py-3 border-t-[2px] border-blk w-full'>

                </div>

            </div>

        </div>
    )
}

export default FAQCard