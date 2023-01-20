import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminNav } from '../components'
import { FaqDetails,  Nothing } from '../components'
import { useFaqsContext } from '../hooks/useFaqsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { motion } from 'framer-motion'

const AdminFAQ = () => {
    const [id, setID] = useState()
    const { faqs, dispatch: dsptch } = useFaqsContext()
	
	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	const { user } = useAuthContext()

	useEffect(() => {
	}, [id, faqs])

    // GET FAQ
	useEffect(() => {
		const fetchFAQs = async () => {
			const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/FAQs`, {
				headers: {
					'Authorization': `Bearer ${user.token}`
				}
			})
			const json = await response.json();

			if (response.ok) {
				// setFAQs(json)
				dsptch({ type: 'SET_FAQS', payload: json })
			}
		}
		fetchFAQs();
	}, [dsptch, user])
    return (
        <div className='w-full h-auto font-space text-blk'>
            <AdminNav />
            <div className='relative px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[3rem] lg:pt-36 lg:pb-10 z-10'>
					<div className='flex flex-row gap-x-0 lg:gap-x-[12px]'>
						<div className='w-full lg:w-5/6'>

							{faqs && faqs.map((faq, i) => (
								<motion.div
									initial={{ opacity: 0, y: 15 }}
									transition={{ delay: (i + 2) * 0.1 }}
									whileInView={{ opacity: 100, y: 0 }}
								>
									<FaqDetails key={faq.id} faq={faq} />
								</motion.div>
							))}
							<Nothing />
						</div>
					</div>
				</div>
        </div>
    )
}

export default AdminFAQ