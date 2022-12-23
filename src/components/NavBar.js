import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import NavLinks from './NavLinks';
import { navHeader, navMenu } from '../constants'

const NavBar = ({ onChange }) => {
	const [navActive, setNavActive] = useState(false)
	const [menuActive, setMenuActive] = useState(false)

	const ref = useRef(null)

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
			<div className='fixed w-80 flex z-10'>
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
								<img src='https://ik.imagekit.io/xzgmktvzg/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671386953332' alt="wingman-logo" className='h-14 lg:h-24 select-none ' />
							</div>

						</div>

					</div>

					<NavLinks onChange={onChange} onClick={closeNav} />

					{/* PROFILE NAV */}
					<div className='profileNav w-full h-28 flex absolute bottom-0'>
						<div className='flex items-center justify-center self-end border-t-2 border-wht w-full h-full'>
							<img src="" alt="" />
							<p className='font-bold w-full px-5 select-none cursor-pointer transition-all ease-in-out duration-[0.2s] hover:text-orng'>AJ</p>
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
								<hr className='my-2 border-light-gry'></hr>
								<p className='text-orng cursor-pointer select-none hover:text-light-orng'>Sign out</p>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-wht h-16 lg:h-28'>
					<div className='border-b-2 border-blk h-16 lg:h-28 flex'>

						{/* NAV BUTTON: FOR MOBILE */}
						<div className='h-16 w-16 bg-blk lg:hidden'>
							<div className='text-wht flex items-center justify-center w-full h-full' onClick={navClick}>
								<GiHamburgerMenu className='text-3xl' />
							</div>
						</div>

						{/* GREETING */}
						<div className='my-auto pl-3 lg:pl-10 text-2xl lg:text-5xl font-bold select-none w-[100vw]'>
							{navHeader.map(labels => {
								return (
									<div {...labels} key={labels.id}>
										<p>{window.location.pathname === labels.link ? labels.name : null}</p>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavBar
