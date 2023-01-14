import React, { useEffect, useState } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Footer, FaqDetails, FaqForm, NACard, Nothing } from '../components'
import { useFaqsContext } from '../hooks/useFaqsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { motion } from 'framer-motion'

const FAQ = () => {

	const [delFAQ, setDel] = useState(false)
	const [verDel, setVerDel] = useState(false)
	const [id, setID] = useState()

	const showDel = (idValue) => {
		setDel(current => !current)
		setID(idValue)
	}

	useEffect(() => {
	}, [id])

	// const [faqs, setFAQs] = useState(null)
	const { faqs, dispatch: dsptch } = useFaqsContext()
	
	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	const { user } = useAuthContext()

	// DELETE FUNCTION
	const handleClick = async () => {
		if (!user) {
			return
		}
		const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/FAQs/` + id, {
			method: 'DELETE',
			headers: {
				'Authorization': `Bearer ${user.token}`
			}
		})
		const json = await response.json()
		if (response.ok) {
			dispatch({ type: 'DELETE_FAQ', payload: json })
			setVerDel(current => !current)
		}
		setDel(current => !current)
	}

	// GET FAQ
	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))
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
	}, [dsptch, user, verDel])

	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space'>

				{/* CONFIRM DELETE MODAL */}
				<div className='absolute z-20 w-full h-full bg-blk/90' style={delFAQ ? { display: "block" } : { display: "none" }}>

					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						className='fixed w-full'>
						<div className='flex justify-center items-center h-[100vh] w-full'>
							<div className='flex flex-col bg-wht p-[24px] rounded-[5px] border-blk border-[2px] justify-center items-center'>
								<p className='font-bold text-3xl mb-5'>Delete FAQ</p>
								<p>Do you really want to delete this FAQ?</p>

								{/* MODAL BUTTONS */}
								<div className='flex gap-x-[12px] mt-5'>
									<p className='px-4 py-2 bg-light-lgry border-blk border-[2px] rounded-[3px] cursor-pointer transition-all ease-int-out duration-[0.1s] hover:drop-shadow-hoverShadow' onClick={showDel}>Cancel</p>
									<p className='px-4 py-2 bg-red border-blk border-[2px] rounded-[3px] cursor-pointer transition-all ease-int-out duration-[0.1s] hover:drop-shadow-hoverShadow' onClick={handleClick}>Delete</p>
								</div>
							</div>
						</div>
					</motion.div>

				</div>

				<div className='relative px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[3rem] lg:pt-36 lg:pb-10 z-10'>
					<div className='flex flex-row gap-x-0 lg:gap-x-[12px]'>
						<div className='w-full lg:w-5/6'>

							{/* <motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 100, y: 0 }}
								className='flex flex-row justify-around mb-[12px] w-full bg-light-lgry border-blk border-[2px] rounded-[3px] text-blk font-bold gap-x-[6px]'>
								<div className='bg-orng w-full h-full p-[7px] ml-[6px] my-[6px] rounded-[3px] justify-center align-center flex cursor-pointer text-wht transition-all ease-in-out duration-[0.1s]'><p>LATEST</p></div>
								<div className='bg-light-lgry w-full h-full p-[7px] mr-[6px] my-[6px] rounded-[3px] justify-center align-center flex cursor-pointer hover:bg-wht transition-all ease-in-out duration-[0.1s]'><p>POPULAR</p></div>
							</motion.div> */}

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 100, y: 0 }}
								transition={{ delay: 1 * 0.1 }}>
								<FaqForm />
							</motion.div>
							
							{faqs && faqs.map((faq, i) => (
								<motion.div
									initial={{ opacity: 0, y: 15 }}
									transition={{ delay: (i + 2) * 0.1 }}
									whileInView={{ opacity: 100, y: 0 }}
								>
									<FaqDetails onClick={showDel} key={faq.id} faq={faq} />
								</motion.div>
							))}
							
							<Nothing />
						</div>

						<div className='w-2/6 hidden lg:block'>
							<motion.p
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 100, y: 0 }}
								className='mb-[12px] w-full bg-orng p-[12px] border-blk border-[2px] rounded-[3px] text-wht text-center font-bold'>SUGGESTED N&A
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 100, y: 0 }}
								transition={{ delay: 1 * 0.2 }}
								className="my-[12px] w-full"><NACard />
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 100, y: 0 }}
								transition={{ delay: 2 * 0.2 }}
								className="my-[12px] w-full"><NACard />
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 100, y: 0 }}
								transition={{ delay: 3 * 0.2 }}
								className="my-[12px] w-full"><NACard />
							</motion.div>

						</div>
					</div>

				</div>
				<Footer />
			</div>
		</>
	)
}

export default FAQ