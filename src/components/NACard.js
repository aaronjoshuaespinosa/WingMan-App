import React from 'react'

const NACard = () => {
    return (
        <>
            <div className='w-full h-56 rounded-[3px] border-[2px] border-blk my-3 after: cursor-pointer transition-all ease-in-out duration-[0.2s]'>
                <div className='absolute bg-blk mt-2 ml-2 rounded-full flex flex-col'>
                    <p className='text-wht px-6 py-3 text-xs'>NEW!</p>
                </div>
                <div className='bg-light-gry h-2/3 w-full'></div>
                <div className='bg-wht h-1/3 w-full border-t-[2px] border-blk'>
                    <div className='w-full h-full flex flex-col justify-center px-5'>
                        <p className='text-orng font-bold text-sm hover:underline'>STRASUC WEEK DONE!</p>
                        <p className='text-light-gry text-xs'>18 hrs ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NACard