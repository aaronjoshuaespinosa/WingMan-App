import React, { useEffect } from 'react'
import { AdminNav } from '../components'
import { useComplaintsContext } from '../hooks/useComplaintsContext'
import ComplaintDetails from '../components/ComplaintDetails'
import { useAuthContext } from '../hooks/useAuthContext'
import { motion } from 'framer-motion'

const AdminNA = () => {
    return (
        <div className='w-full h-auto font-space text-blk'>
            <AdminNav />
            <div className='pt-12 px-40'>
                news
            </div>
        </div>
    )
}

export default AdminNA