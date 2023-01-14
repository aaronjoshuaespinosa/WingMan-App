import React from 'react'
import { BsFillImageFill } from "react-icons/bs";

const NACard = (props) => {

    const { name, author, bool, link } = props

    return (
        <>
            <div className='w-full h-56 rounded-[3px] border-[2px] border-blk after: cursor-pointer transition-all ease-in-out duration-[0.1s]'>
                <a href={link} target="_blank">
                    <div
                        style={bool ? { display: "block" } : { display: "none" }}
                        className='absolute bg-blk mt-2 ml-2 rounded-full flex flex-col'>
                        <p className='text-wht px-6 py-3 text-xs'>NEW!</p>
                    </div>

                    <div className='bg-light-gry text-blk h-2/3 w-full flex items-center justify-center transition-all ease-in-out duration-[0.2s] text-8xl hover:text-9xl'>
                        <BsFillImageFill />
                    </div>

                    <div className='bg-wht h-1/3 w-full border-t-[2px] border-blk'>
                        <div className='w-full h-full flex flex-col justify-center px-5'>
                            <p className='text-orng font-bold text-sm hover:underline'>{name}</p>
                            <p className='text-light-gry text-xs'>{author}</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default NACard