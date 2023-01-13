import React, { useState } from 'react'

const AppCard = (props) => {

    const { appointment, index } = props


    return (
        <>
            <div className='flex flex-row'>

                <div className='flex justify-center items-center pr-3 lg:pr-5 w-[3rem]'>
                    {/* INDEX NUNG ENTRY, KUNG PANG-ILAN NA APPOINTMENT */}
                    <p className='text-orng font-bold text-3xl'>0{index + 1}</p>
                </div>

                <div className='flex flex-col lg:flex-col bg-light-lgry border-r-blk border-r-[2px] border-l-orng border-l-[5px] border-t-blk border-t-[2px] border-b-blk border-b-[2px] w-full cursor-pointer'>

                    <div className='flex justify-between items-center w-full p-[12px]'>
                        {/* APPOINTMENT TYPE + APPOINTMENT TITLE */}
                        <p className='w-[50%] lg:w-auto underline font-bold cursor-pointer uppercase hover:text-orng transition-all ease-in-out duration-[0.2s]'>{appointment.title}</p>

                        <div className='w-[50%] lg:w-auto flex flex-col lg:flex-row gap-x-2 font-bold select-none'>

                            {/* APPOINTMENT DATE - PLACEHOLDER MUNA */}
                            <p>Type: {appointment.type}</p>

                            {/* LINE */}
                            <p className='hidden lg:block'>|</p>

                            {/* APPOINTMENT TIME - PLACEHOLDER MUNA */}
                            <p>Status: {appointment.status}</p>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className='py-3 bg-wht p-[12px]'>
                        <p>{appointment.description}</p>
                    </div>

                </div>



            </div>
        </>
    )
}

export default AppCard