import React from 'react'

const Footer = () => {

    return (
        <>
            <footer className='flex flex-col justify-center items-center lg:flex-row lg:place-content-between text-sm bg-wht border-t-[2px] border-blk w-full lg:pl-[22.5rem] h-auto lg:h-28 px-10'>
                <p className='py-10 lg:py-0 font-bold'>Wingman 2023</p>
                <div className='flex flex-col items-center lg:flex-row gap-x-5 pt-5 pb-10 lg:py-0'>
                    <p className='cursor-pointer hover:text-light-gry'>Terms and Conditions</p>
                    <p className='cursor-pointer hover:text-light-gry'>Privacy Policy</p>
                </div>
            </footer>
        </>
    )
}

export default Footer