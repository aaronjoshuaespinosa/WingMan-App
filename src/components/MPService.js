import React from 'react'

const MPService = () => {
    return (
        <>
            <div className='flex flex-col w-full h-80 hover:drop-shadow-hoverShadow transition-drop-shadow ease-in-out duration-[0.1s] cursor-pointer'>
                <div className='bg-light-lgry h-5/6 w-full border-x-[2px] border-t-[2px] border-blk rounded-t-[3px]'></div>
                <div className='flex w-full h-2/6'>
                    <div className='bg-wht w-full px-3 flex flex-col justify-center border-y-[2px] border-l-[2px] border-blk rounded-bl-[3px]'>
                        <p className='text-blk font-black text-base hover:underline cursor-pointer'>Art Commission</p>
                        <div><p className='text-light-gry text-sm hover:underline cursor-pointer'>Kim Arada</p></div>
                    </div>
                    <div className='bg-orng flex items-center justify-center p-5 border-y-[2px] border-x-[2px] border-blk rounded-br-[3px] hover:bg-light-orng cursor-pointer transition-all ease-in-out duration-[0.2s]'>
                        <p className='font-bold text-wht'>₱1,500</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MPService