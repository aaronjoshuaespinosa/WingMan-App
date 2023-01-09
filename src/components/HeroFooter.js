import React from 'react'

const HeroFooter = () => {
  return (
    <div className='w-full border-t-blk border-[2px] flex flex-col-reverse lg:flex-row items-center font-bold py-10 px-5 lg:px-56 justify-center lg:justify-between text-center'>
        <p className='pt-12 lg:pt-0 pointer-events-none'>© WingMan 2023</p>
        <p className='hover:underline cursor-pointer'>The Dev Profiles</p>
    </div>
  )
}

export default HeroFooter