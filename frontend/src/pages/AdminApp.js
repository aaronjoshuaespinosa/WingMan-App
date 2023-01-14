import React from 'react'
import { AdminNav } from '../components'

const AdminApp = () => {
    return (
        <div className='w-full h-auto font-space text-blk'>
            <AdminNav />
            <div className='pt-12 px-40'>
                <p>APPOINTMENTS</p>
            </div>
        </div>
    )
}

export default AdminApp