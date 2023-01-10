import React from 'react'

const AppSelect = (props) => {

    const { name, onClick } = props

    return (
        <>
            <div className='w-full h-[25rem] rounded-[5px] border-[2px] border-blk my-[12px] cursor-pointer hover:drop-shadow-hoverShadow transition-all ease-in-out duration-[0.1s]' onClick={onClick}>
                <div className='bg-orng hover:bg-light-orng h-5/6 transition-all ease-in-out duration-[0.2s]'></div>
                <div className='bg-wht h-1/6 px-[24px] flex items-center border-t-blk border-t-[2px]'>
                    <p className='text-blk text-2xl font-bold'>{name}</p>
                </div>
            </div>
        </>
    )
}

export default AppSelect