import React from 'react'
import { useNavigate } from 'react-router-dom'
import { adminNav } from '../constants'

const AdminNav = () => {

    const navigate = useNavigate()

    const adminDash = () => {
        navigate("/admin/dashboard", { replace: true })
    }

    const adminFAQ = () => {
        navigate("/admin/faqs", { replace: true })
    }

    const adminApp = () => {
        navigate("/admin/appointments", { replace: true })
    }

    const adminComp = () => {
        navigate("/admin/complaints", { replace: true })
    }

    return (
        <>
            <div className='w-full h-auto bg-blk font-space text-wht fixed z-50'>
                <nav className='flex flex-row w-full justify-between items-center px-40 font-bold'>
                    <p className="cursor-pointer hover:text-orng text-xl py-3" onClick={adminDash}>WINGMAN ADMIN</p>

                    <div className='flex flex-row gap-x-1'>
                        <div
                            className='h-full py-3 px-3'
                            onClick={adminDash}
                            style={window.location.pathname === "/admin/dashboard" ? { color: "#FC5F1C", borderBottom: "solid 3px #FC5F1C" } : { color: "#F9F9F9" }}>
                            <p className="h-full cursor-pointer hover:text-orng">Dashboard</p>
                        </div>

                        <div
                            className='h-full py-3 px-3'
                            onClick={adminFAQ}
                            style={window.location.pathname === "/admin/faqs" ? { color: "#FC5F1C", borderBottom: "solid 3px #FC5F1C" } : { color: "#F9F9F9" }}>
                            <p className="h-full cursor-pointer hover:text-orng">FAQs</p>
                        </div>

                        <div
                            className='h-full py-3 px-3'
                            onClick={adminApp}
                            style={window.location.pathname === "/admin/appointments" ? { color: "#FC5F1C", borderBottom: "solid 3px #FC5F1C" } : { color: "#F9F9F9" }}>
                            <p className="h-full cursor-pointer hover:text-orng">Appointments</p>
                        </div>

                        <div
                            className='h-full py-3 px-3'
                            onClick={adminComp}
                            style={window.location.pathname === "/admin/complaints" ? { color: "#FC5F1C", borderBottom: "solid 3px #FC5F1C" } : { color: "#F9F9F9" }}>
                            <p className="h-full cursor-pointer hover:text-orng">Complaints</p>
                        </div>
                    </div>

                    <p className='text-orng cursor-pointer'>Sign out</p>
                </nav>
            </div>
        </>
    )
}

export default AdminNav