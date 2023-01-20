import React from 'react'
import { AdminNav } from '../components'


const Admin = () => {
    return (
        <>
            <div className='w-full h-auto font-space text-blk'>
                <AdminNav />
                <div className='pt-12 px-40'>
                    <p>DASHBOARD</p>
                </div>
            </div>
        </>
    )
}

export default Admin