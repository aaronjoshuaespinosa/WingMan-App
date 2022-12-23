import React from 'react'

const FAQCard = () => {
    return (
        <>
            <div className='flex flex-col'>
                <p className='text-orng text-lg lg:text-xl font-bold tracking-[0rem] lg:tracking-[0.5rem] w-full leading-[0.5rem] mt-3'>MOST POPULAR</p>
                <div className='w-full h-56 rounded-[3px] border-[2px] border-blk my-3'>
                    <div className='bg-wht h-5/6 w-full flex gap-2 p-3 lg:p-5 place-content-between'>
                        <div className=''>
                            <div>
                                <h1 className='font-bold text-lg'>Kim Arada</h1>
                                <p className='text-light-gry text-sm leading-[0.5rem]'>3 days ago</p>
                            </div>
                            <div>
                                <p className='font-bold text-sm mt-3'>Anybody want to commission for an artwork? Hit me up and contact me using the details in my profile.</p>
                                <p className='font-bold text-sm text-light-orng mt-4'>#FreelanceArtist</p>
                            </div>
                        </div>
                        <div className='flex flex-col h-full items-center justify-center'>
                            <p>^</p>
                            <p>v</p>
                        </div>
                    </div>
                    <div className='bg-light-lgry h-1/6 w-full border-t-[2px] border-blk flex flex-row place-content-between items-center px-2 font-bold text-sm'>
                        <div className='flex flex-row gap-1'>
                            <p>420</p>
                            <p>69</p>
                            <p>29</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='bg-wht border-blk border-[2px] rounded-full px-3 py-[0.1rem]'>Art</p>
                            <p className='bg-wht border-blk border-[2px] rounded-full px-3 py-[0.1rem]'>Freelance</p>
                            <p className='bg-wht border-blk border-[2px] rounded-full px-1 py-[0.1rem]'>...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQCard