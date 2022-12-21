import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navIcons, navLinks } from '../constants'

const NavLinks = ({ onChange, onClick }) => {
    const navigate = useNavigate()

    const switchLink = (e) => {
        navigate(e.target.id)
        onChange()
        onClick()
    }
    return (
        <>
            <div className='navLinks'>
                <div className='px-7 py-5 lg:p-5 h-full select-none'>
                    {navLinks.map(links => {
                        return (
                            <div key={links.id} id={links.link} className='flex flex-column items-center py-5 hover:text-orng transition-all ease-in-out duration-[0.2s] cursor-pointer select-none' onClick={switchLink} style={window.location.pathname === links.link ? { color: "#FC5F1C" } : {}}>
                                <div className='pr-3 text-2xl select-none pointer-events-none hover:text-orng'>{navIcons[links.id]}</div>
                                <p {...links} className="font-bold select-none pointer-events-none">{links.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default NavLinks