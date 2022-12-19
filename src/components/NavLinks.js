import React from 'react'
import { navIcons, navLinks } from '../constants'

const NavLinks = ({ isActive }) => {
    return (
        <>
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
        </>
    )
}

export default NavLinks