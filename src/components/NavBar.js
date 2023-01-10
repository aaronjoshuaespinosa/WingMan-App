import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import NavLinks from './NavLinks';
import { navHeader, navMenu } from '../constants'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';



const NavBar = ({ onChange }) => {
	const [navActive, setNavActive] = useState(false)
	const [menuActive, setMenuActive] = useState(false)

	const ref = useRef(null)

	const { user } = useAuthContext()
	
	const { logout } = useLogout()
	//signout button
	const signoutClick = () => {
		logout()
	}

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick, true)
	}, [])

	const handleOutsideClick = (e) => {
		if (ref.current.contains(e.target)) {
			console.log("inside")
			setMenuActive(current => !current)
		}
		else {
			console.log("outside")
			setMenuActive(false)
		}
	}

	const navClick = () => {
		setNavActive(current => !current)
	}

	const menuClick = () => {
		setMenuActive(current => !current)
	}

	const closeNav = () => {
		setNavActive(false)
	}

	return (
		<>
			<div className='fixed w-full lg:w-80 flex z-20'>
				<div className='bg-blk w-full h-screen lg:w-80 text-wht absolute lg:relative top-0 lg:block transition-all ease-in-out duration-[0.2s] translate-x-[-100%] lg:translate-x-0' style={navActive ? { transform: "translateX(0%)" } : {}}>
					{/* NAV LOGO */}
					<div className='wingman-logo'>

						<div className='flex lg:items-center lg:justify-center border-b-2 border-wht h-16 lg:h-28 relative'>

							{/* CLOSE BUTTON */}
							<div className='bg-wht h-16 w-16 lg:hidden absolute'>
								<div onClick={navClick} className='text-blk text-4xl flex items-center justify-center h-full w-full'><AiOutlineClose /></div>
							</div>

							{/* WINGMAN LOGO */}
							<div className='h-full w-full flex items-center justify-center ml-16 lg:ml-0'>
								<img src='https://ik.imagekit.io/xzgmktvzg/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671386953332' alt="wingman-logo" className='h-14 lg:h-24 select-none' />
							</div>

						</div>

					</div>

					<NavLinks onChange={onChange} onClick={closeNav} />

					{/* PROFILE NAV */}
					<div className='profileNav w-full h-28 flex absolute bottom-0'>
						<div className='flex items-center justify-center self-end border-t-2 border-wht w-full h-full'>
							<img src="" alt="" />
							<p className='font-bold w-full px-5 select-none cursor-pointer transition-all ease-in-out duration-[0.2s] hover:text-orng'>{user.data.firstName}</p>
							<div className='px-5 text-xl h-full flex items-center cursor-pointer transition-all ease-in-out duration-[0.2s] hover:text-orng' onClick={menuClick}><MdOutlineKeyboardArrowUp /></div>
						</div>

						{/* NAV MENU */}
						<div className='bg-wht absolute text-blk font-medium text-sm p-3 flex rounded-[2px] border-blk border-[2px] right-2 lg:right-[-3.9rem] top-[-10.5rem] transition-all ease-in-out duration-[0.2s]' ref={ref} style={menuActive ? { display: "block" } : { display: "none" }}>
							<div className='h-fit w-fit'>
								{navMenu.map(menuLinks => {
									return (
										<p {...menuLinks} key={menuLinks.id} className='py-1 pr-5 cursor-pointer select-none hover:text-light-gry'>{menuLinks.name}</p>
									)
								})}
								<hr className='my-2 border-light-gry' />
								<button className='text-orng cursor-pointer select-none hover:text-light-orng' onClick={signoutClick}><a href="/sign-in" target="_self">Sign out</a></button>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-wht h-16 lg:h-28'>
					<div className='border-b-2 border-blk h-16 lg:h-28 flex'>

						{/* NAV BUTTON: FOR MOBILE */}
						<div className='h-16 w-16 bg-blk lg:hidden'>
							<div className='text-wht flex items-center justify-center h-full' onClick={navClick}>
								<GiHamburgerMenu className='text-3xl' />
							</div>
						</div>

						{/* GREETING */}
						<div className='flex gap-x-[0.05rem] lg:gap-x-[0.15rem] my-auto px-3 lg:px-[1.5rem] xl:px-10 text-2xl lg:text-5xl text-blk font-bold select-none w-[100vw] relative'>
							{navHeader.map(labels => {
								return (
									<div {...labels} key={labels.id}>
										<p>{window.location.pathname === labels.link ? labels.name : null}</p>
									</div>
									
								)
							})}
							<p>{window.location.pathname === "/dashboard" ? `${user.data.firstName}!` : null}</p>
							<div>
								<input type='text' placeholder='Search the market...' className='absolute right-0 mr-3 lg:mr-[1.5rem] xl:mr-10 py-2 px-3 w-64 md:w-72 lg:w-80 xl:w-96 text-base border-blk border-[2px] rounded-[3px] translate-y-[-100%] hidden'></input>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavBar
