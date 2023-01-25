import React from 'react'
import { AdminNav, AdminFooter } from '../components'


const Admin = () => {
    return (
        <>
            <div className='w-full h-auto font-space text-blk'>
                <AdminNav />
                <div className='pt-12 px-96'>
                    <p>DASHBOARD</p>
                </div>
                <AdminFooter />
            </div>
        </>
    )
}

export default Admin