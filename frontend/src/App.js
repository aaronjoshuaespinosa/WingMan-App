import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Join, Login, Dashboard, Marketplace, Appointments, News, Complaints, FAQ, ErrorPage, Profile, Hero, Devs, Admin, AdminComp, AdminApp, AdminFAQ, AdminNA } from './pages'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { NavBar, ScrollToTop } from './components'
import { setToggle } from './features/navSlice'
import './index.css'
import { useAuthContext } from './hooks/useAuthContext'


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

	const { user } = useAuthContext()

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

			<ScrollToTop>
				<Routes>
					<Route path="/" element={!user ? <Hero /> : <Navigate to="/dashboard" />}></Route>
					<Route path="/sign-in" element={!user ? <Login /> : <Navigate to="/dashboard" />}></Route>
					<Route path="/join-us" element={!user ? <Join /> : <Navigate to="/dashboard" />}></Route>
					<Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />}></Route>
					<Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />}></Route>
					<Route path="/marketplace" element={user ? <Marketplace /> : <Navigate to="/" />}></Route>
					<Route path="/appointments" element={user ? <Appointments /> : <Navigate to="/" />}></Route>
					<Route path="/news-and-announcements" element={user ? <News /> : <Navigate to="/" />}></Route>
					<Route path="/complaint-system" element={user ? <Complaints /> : <Navigate to="/" />}></Route>
					<Route path="/faqs" element={user ? <FAQ /> : <Navigate to="/" />}></Route>
					<Route path="/devs" element={!user ? <Devs /> : <Navigate to="/" />}></Route>
					<Route path="/admin/dashboard" element={<Admin />}></Route>
					<Route path="/admin/news-and-announcements" element={<AdminNA />}></Route>
					<Route path="/admin/faqs" element={<AdminFAQ />}></Route>
					<Route path="/admin/appointments" element={<AdminApp />}></Route>
					<Route path="/admin/complaints" element={<AdminComp />}></Route>
					<Route path="/terms-and-conditions" element={<TermsConditions />}></Route>
					<Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
			</ScrollToTop>

		</>
	);
}

export default App;
