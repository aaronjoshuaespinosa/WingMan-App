import React from 'react'
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { MdChatBubble } from "react-icons/md";

const FAQCard = () => {
    return (
        <>
            <div className='flex flex-col'>
                <p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem] w-full leading-[0.5rem] mt-3'>MOST POPULAR</p>
                <div className=' flex flex-col w-full rounded-[3px] border-[2px] border-blk my-3'>
                    <div className='bg-wht w-full flex gap-2 p-3 lg:p-5 place-content-between'>
                        <div className=''>
                            <div>
                                <h1 className='font-bold text-md cursor-pointer hover:underline'>Kim Arada</h1>
                                <p className='text-light-gry text-xs leading-[0.5rem]'>3 days ago</p>
                            </div>
                            <div>
                                <p className='font-bold text-sm mt-3'>Anybody want to commission for an artwork? Hit me up and contact me using the details in my profile.</p>
                                <p className='font-bold text-sm text-light-orng mt-4 cursor-pointer hover:underline'>#FreelanceArtist</p>
                            </div>
                        </div>
                        <div className='flex flex-col h-full items-center justify-center gap-5'>
                            <p className='text-2xl hover:text-light-gry transition-all ease-in-out duration-[0.2s] cursor-pointer'><ImArrowUp /></p>
                            <p className='text-2xl hover:text-light-gry transition-all ease-in-out duration-[0.2s] cursor-pointer'><ImArrowDown /></p>
                        </div>
                    </div>
                    <div className='bg-light-lgry  w-full border-t-[2px] border-blk flex flex-row place-content-between items-center px-2 font-bold text-sm'>
                        <div className='flex flex-row gap-2 md:gap-2 lg:gap-1 xl:gap-5 items-center my-2'>
                            <div className='flex flex-row gap-[0.25rem] items-center cursor-pointer text-sm'><ImArrowUp /><p>420</p></div>
                            <div className='flex flex-row gap-[0.25rem] items-center cursor-pointer text-sm'><MdChatBubble /><p>29</p></div>
                        </div>
                        <div className='flex flex-row gap-1 my-2 ml-2'>
                            <p className='bg-wht border-blk border-[2px] rounded-full px-3 py-[0.1rem] cursor-pointer hover:bg-light-lgry transition-all ease-in-out duration-[0.2s]'>Art</p>
                            <p className='bg-wht border-blk border-[2px] rounded-full px-3 py-[0.1rem] cursor-pointer hover:bg-light-lgry transition-all ease-in-out duration-[0.2s]'>Freelance</p>
                            <p className='bg-wht border-blk border-[2px] rounded-full px-1 py-[0.1rem] cursor-pointer hover:bg-light-lgry transition-all ease-in-out duration-[0.2s]'>...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQCard