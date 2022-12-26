import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Join, Login, Dashboard, Marketplace, Appointments, News, Complaints, FAQ, ErrorPage, Profile } from './pages'
import { NavBar } from './components'
import { setToggle } from './features/navSlice'
import './index.css'

function App() {

	const showNav = [
		"/dashboard",
		"/marketplace",
		"/appointments",
		"/news-and-announcements",
		"/complaint-system",
		"/faqs",
		"/profile"
	]

	const [active, setActive] = useState(false)

	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	const onChange = () => {
		dispatch(setToggle({ value: !toggle }))
	}

	useEffect(() => {
		if (showNav.includes(window.location.pathname)) {
			setActive(true)
		} else {
			setActive(false)
		}
	}, [toggle])

	const nav = (
		<div className='flex h-screen w-full font-space relative'>
			<NavBar onChange={onChange} />
		</div>
	)

	return (
		<>
			{active ? nav : null}
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/sign-in" element={<Login />}></Route>
				<Route path="/join-us" element={<Join />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
				<Route path="/marketplace" element={<Marketplace />}></Route>
				<Route path="/appointments" element={<Appointments />}></Route>
				<Route path="/news-and-announcements" element={<News />}></Route>
				<Route path="/complaint-system" element={<Complaints />}></Route>
				<Route path="/faqs" element={<FAQ />}></Route>
				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
