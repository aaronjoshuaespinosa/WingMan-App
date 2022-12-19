import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { navIcons, navLinks } from '../constants'

const NavBar = () => {
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
        <div className='bg-blk w-full lg:w-96 h-full text-wht absolute lg:relative lg:block transition-all ease-in-out duration-[0.2s]' style={navActive ? { transform: "translateX(0%)" } : { transform: "translateX(-100%)" }}>
          {/* NAV LOGO */}
          <div className='wingman-logo'>

            <div className='flex lg:items-center lg:justify-center border-b-2 border-wht h-16 lg:h-28 relative'>

              {/* CLOSE BUTTON */}
              <div className='bg-wht h-16 w-16 lg:hidden absolute'>
                <div onClick={navClick} className='text-blk text-4xl flex items-center justify-center h-full w-full'><AiOutlineClose /></div>
              </div>

              {/* WINGMAN LOGO */}
              <div className='h-full w-full flex items-center justify-center ml-16 lg:ml-0'>
                <img src='https://ik.imagekit.io/xzgmktvzg/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671386953332' alt="wingman-logo" className='h-14 lg:h-24 select-none ' />
              </div>

            </div>

          </div>

          {/* NAV LINKS */}
          <div className='navLinks'>
            <div className='px-7 py-5 lg:p-5 h-full'>
              {navLinks.map(links => {
                return (
                  <div key={links.id} className='flex flex-column items-center py-5 hover:text-orng transition-all ease-in-out duration-[0.2s] cursor-pointer'>
                    <div className='pr-3 text-2xl select-none hover:text-orng'>{navIcons[links.id]}</div>
                    <p {...links} className="font-bold select-none">{links.name}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* PROFILE NAV */}
          <div className='profileNav w-full h-28 flex absolute bottom-0'>
            <div className='flex items-center justify-center self-end border-t-2 border-wht w-full h-full'>
              <img src="" alt="" />
              <p className='font-bold w-full px-5 select-none cursor-pointer transition-all ease-in-out duration-[0.2s] hover:text-orng'>AJ</p>
              <div className='px-5 text-xl h-full flex items-center cursor-pointer transition-all ease-in-out duration-[0.2s] hover:text-orng'><MdOutlineKeyboardArrowUp /></div>
            </div>
          </div>

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
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar