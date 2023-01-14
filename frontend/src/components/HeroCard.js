import React from 'react'

const HeroCard = (props) => {

    const { index, title, desc } = props

    return (
        <>
            <div className='z-10 bg-wht border-blk border-[2px] rounded-[15px] p-[24px] flex flex-col gap-y-5 select-none transition-all ease-in-out duration-[0.1s] hover:drop-shadow-hoverShadow basis-1/3'>
                <div className='flex flex-row w-full items-center gap-x-3'>
                    <div className='h-16 w-16 text-3xl font-bold text-wht bg-orng rounded-full flex items-center justify-center'>
                        <p className=''>{index + 1}</p>
                    </div>
                    <p className='text-blk font-bold text-5xl'>{title}</p>
                </div>
                <p className='text-sm'>{desc}</p>
            </div>
        </>
    )
}

export default HeroCard