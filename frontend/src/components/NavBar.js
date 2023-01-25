import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import NavLinks from './NavLinks';
import { navHeader, navMenu } from '../constants'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';
import { motion } from 'framer-motion';



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
	}, [menuActive])

	const handleOutsideClick = (e) => {
		if (ref.current.contains(e.target)) {
			setMenuActive(current => !current)
		}
		else {
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
							<div className='h-full w-full flex items-center justify-center ml-16 lg:ml-0 z-50'>
								<img src='https://ik.imagekit.io/xzgmktvzg/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671386953332' alt="wingman-logo" className='h-14 lg:h-24 z-50 select-none' />
							</div>

						</div>

					</div>

					<NavLinks onChange={onChange} onClick={closeNav} />

					{/* PROFILE NAV */}
					<div className='profileNav w-full h-28 flex absolute bottom-0'>
						<div className='flex items-center px-5 justify-between border-t-2 border-wht w-full h-full'>
							<div className='flex items-center gap-x-3'>

								{/* USER IMAGE */}
								<div className='bg-wht h-8 w-8 rounded-full cursor-pointer'>
									<img src='https://ik.imagekit.io/xzgmktvzg/wingmanUser.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673428507695' alt='user-image' className='rounded-full' />
								</div>

								<p className='font-bold select-none cursor-pointer transition-all ease-in-out duration-[0.2s] hover:text-orng'>
									{user.data && user.data.firstName}{!user.data && user.firstName}</p>
							</div>

							<div>
								<div className='text-2xl h-full flex items-center cursor-pointer transition-all ease-in-out duration-[0.2s] hover:text-orng z-20' onClick={menuClick}><MdOutlineKeyboardArrowUp /></div>
							</div>
						</div>

						{/* NAV MENU */}
						<motion.div
							initial={{ scale: 0, y: 100 }}
							whileInView={{ scale: 1, y: 0 }}
							className='bg-wht absolute text-blk font-medium text-sm p-3 flex rounded-[2px] border-blk border-[2px] right-2 lg:right-[-3.9rem] top-[-6.5rem]' ref={ref} style={menuActive ? { display: "block" } : { display: "none" }}>
							<div className='h-fit w-fit'>
								{navMenu.map(menuLinks => {
									return (
										<p {...menuLinks} key={menuLinks.id} className='py-1 pr-5 cursor-pointer select-none hover:text-light-gry' onClick={menuClick}>{menuLinks.name}</p>
									)
								})}
								<hr className='my-2 border-light-gry' />
								<button className='text-orng cursor-pointer select-none hover:text-light-orng' onClick={signoutClick}><a href="/sign-in" target="_self">Sign out</a></button>
							</div>
						</motion.div>
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
					</div>
				</div>
			</div>
		</>
	)
}

export default NavBar
