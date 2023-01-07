import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Footer, NACard } from '../components'
import FaqDetails from '../components/FaqDetails'
import FaqForm from '../components/FaqForm'
import { useFaqsContext } from '../hooks/useFaqsContext'

const FAQ = () => {
	// const [faqs, setFAQs] = useState(null)
	const { faqs, dispatch: dsptch } = useFaqsContext()

	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))
		const fetchFAQs = async () => {
			const response = await fetch('/api/FAQs')
			const json = await response.json();

			if (response.ok) {
				// setFAQs(json)
				dsptch({ type: 'SET_FAQS', payload: json })
			}
		}
		fetchFAQs();
	}, [])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space'>
				<div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[3rem] lg:pt-40 lg:pb-10 z-10'>
					<div className='flex flex-row gap-x-[12px]'>
						<div className='w-5/6'>
							<div className='flex flex-row justify-around mx-[12px] w-full bg-light-lgry border-blk border-[2px] rounded-[3px] text-blk font-bold'>
								<div className='bg-orng w-full h-full p-[7px] m-[5px] rounded-[3px] justify-center align-center flex cursor-pointer text-wht'><p>LATEST</p></div>
								<div className='bg-light-lgry w-full h-full p-[7px] m-[5px] rounded-[3px] justify-center align-center flex cursor-pointer'><p>POPULAR</p></div>
							</div>
							<FaqForm />
							{faqs && faqs.map((faq) => (
								<FaqDetails key={faq.id} faq={faq} />
							))}
						</div>

						<div className='w-2/6'>
							<p className='mx-[12px] w-full bg-orng p-[12px] border-blk border-[2px] rounded-[3px] text-wht text-center font-bold'>SUGGESTED N&A</p>
							<NACard />
							<NACard />
							<NACard />
							<NACard />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default FAQ