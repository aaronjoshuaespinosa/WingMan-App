import React from 'react'
import { useState, useEffect } from 'react'
import { NavBar } from '../components'
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {

  const [navActive, setNavActive] = useState(false)

  useEffect(() => {
    console.log(navActive)
  }, [navActive])

  const navClick = () => {
    setNavActive(current => !current)
  }

  return (
    <>
      <div className='w-full h-screen flex flex-row font-space'>
        {/* NAVIGATION */}
        <NavBar />

        {/* FEED */}
        <div className='bg-wht w-full h-full'>
          <div className='border-b-2 border-blk h-16 lg:h-28 flex'>

            {/* NAV BUTTON: FOR MOBILE */}
            <div className='h-16 w-16 bg-blk lg:hidden'>
              <div className='text-wht flex items-center justify-center w-full h-full' onClick={navClick}>
                <GiHamburgerMenu className='text-3xl' />
              </div>
            </div>

            {/* GREETING */}
            <div className='my-auto pl-3 lg:pl-10 text-2xl lg:text-5xl font-bold select-none'>Good day, AJ</div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard