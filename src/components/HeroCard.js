import React from 'react'

const HeroCard = () => {
    return (
        <>
            <div className='z-10 bg-wht border-blk border-[2px] rounded-[15px] p-[24px] flex flex-col gap-y-5 select-none transition-all ease-in-out duration-[0.1s] hover:drop-shadow-hoverShadow'>
                <div className='flex flex-row w-full items-center gap-x-3'>
                    <div className='h-16 w-16 text-3xl font-bold text-wht bg-orng rounded-full flex items-center justify-center'>
                        <p className=''>1</p>
                    </div>
                    <p className='text-blk font-bold text-5xl'>WHAT</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum elit. In hac habitasse platea dictumst. Nam quis elit non ante auctor consequat. Nullam volutpat ullamcorper tempus. Phasellus auctor mi in tempus faucibus. Aliquam ut auctor ex, et suscipit diam. Aenean cursus justo nec metus sollicitudin elementum. Maecenas at ullamcorper lacus, sit amet pharetra magna. </p>
            </div>
        </>
    )
}

export default HeroCard