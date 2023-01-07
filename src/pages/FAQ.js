import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from '../components'
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
				<div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[2.5rem] lg:pt-40 lg:pb-10 z-10'>
					<FaqForm />
					{faqs && faqs.map((faq) => (
						<FaqDetails key={faq.id} faq={faq} />
					))}
				</div>
				<Footer />
			</div>
		</>
	)
}

export default FAQ