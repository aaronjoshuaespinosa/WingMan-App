import React from 'react'

const AppForm = (props) => {

    const { name, onClick } = props

    return (
        <>
            <div className='bg-light-lgry w-full h-full border-[2px] border-blk rounded-[3px] p-[24px]'>

                {/* TITLE */}
                <p className='text-blk font-bold text-3xl mb-[12px]'>Make an appointment: {name}</p>
                <div className='flex flex-col gap-y-[12px]'>

                    {/* APPOINTMENT TITLE */}
                    <input className="w-full p-[12px] border-blk border-[2px] rounded-[3px]" placeholder="Appointment Title" />

                    {/* APPOINTMENT DESCRIPTION */}
                    <textarea className="resize-y p-[12px] border-blk border-[2px] rounded-[3px] h-[10rem] lg:h-[10rem]" placeholder="Description" />
                </div>

                <div className='flex flex-row items-center h-full w-full]'>

                    {/* BACK BUTTON - NO NEED BACKEND */}
                    <p className='w-full h-full mt-[12px] font-bold hover:underline cursor-pointer' onClick={onClick}>← Appointment Type</p>

                    <div className='flex gap-x-[12px] mt-[12px] w-full h-full justify-end'>

                        {/* CLEAR BUTTON */}
                        <button className='px-5 py-2 font-bold bg-wht border-[2px] border-blk text-blk rounded-[3px] hover:drop-shadow-hoverShadow hover:bg-light-lgry transition-all ease-in-out duration-[0.1s]'>Clear</button>

                        {/* POST BUTTON */}
                        <button className='px-5 py-2 font-bold bg-orng border-[2px] border-blk text-blk rounded-[3px] hover:drop-shadow-hoverShadow hover:bg-light-orng transition-all ease-in-out duration-[0.1s]'>Submit</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AppForm