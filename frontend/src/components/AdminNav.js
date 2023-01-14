import React from 'react'
import { adminNav } from '../constants'

const AdminNav = () => {
    return (
        <>
            <div className='w-full h-auto bg-blk font-space text-wht'>
                <nav className='flex flex-row w-full justify-between items-center px-40 font-bold'>
                    <p className="cursor-pointer hover:text-orng text-xl py-3">WINGMAN ADMIN</p>

                    <div className='flex flex-row gap-x-1'>
                        {adminNav.map((link) => (
                            <div className='h-full py-3 px-3'
                                style={window.location.pathname === `${link.link}` ? { color: "#FC5F1C", borderBottom: "solid 3px #FC5F1C" } : { color: "#F9F9F9" }}>
                                <p key={link.id} className="h-full cursor-pointer hover:text-orng">{link.name}</p>
                            </div>
                        ))}
                    </div>

                    <p className='text-orng cursor-pointer'>Sign out</p>
                </nav>
            </div>
        </>
    )
}

export default AdminNav