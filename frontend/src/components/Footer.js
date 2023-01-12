import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='flex flex-col justify-center items-center lg:flex-row lg:place-content-between font-black text-sm bg-wht border-t-[2px] border-blk w-full lg:pl-[22.5rem] h-28 px-10'>
                <p className='cursor-pointer hover:text-light-gry'>The Dev Profiles</p>
                <div className='flex flex-col items-center lg:flex-row gap-x-5'>
                    <p className='cursor-pointer hover:text-light-gry'>Terms and Conditions</p>
                    <p className='cursor-pointer hover:text-light-gry'>Privacy Policy</p>
                    <p>ⓒ 2022</p>
                </div>
            </footer>
        </>
    )
}

export default Footer