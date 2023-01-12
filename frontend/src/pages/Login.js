import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormInput, LoginHero, LoginNav } from '../components'
import { signinInputs } from '../constants'
import { useLogin } from '../hooks/useLogin'
import { motion } from 'framer-motion';


const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const { login, error, isLoading } = useLogin()

    const [valuesError, setError] = useState({
        email: null,
        password: null
    })

    const [showError, setShowError] = useState({
        email: false,
        password: false
    })

    const handleSubmit = async (e) => {

        //EMAIL VALIDATION
        if (values.email === "") {
            setError(data => ({ ...data, 'email': 'Email cannot be empty.' }))
            setShowError(data => ({ ...data, 'email': true }))
        }
        else if (!(validEmail(values.email))) {
            setError(data => ({ ...data, 'email': 'Incorrect Email.' }))
            setShowError(data => ({ ...data, 'email': true }))
        }
        else {
            setError(data => ({ ...data, 'email': '' }))
            setShowError(data => ({ ...data, 'email': false }))
        }

        //PASSWORD VALIDATION
        if (values.password === "") {
            setError(data => ({ ...data, 'password': 'Password cannot be empty.' }))
            setShowError(data => ({ ...data, 'password': true }))
        }
        else if (values.password.length < 8) {
            setError(data => ({ ...data, 'password': 'Incorrect Password.' }))
            setShowError(data => ({ ...data, 'password': true }))
        }
        else {
            setError(data => ({ ...data, 'password': '' }))
            setShowError(data => ({ ...data, 'password': false }))
        }

        e.preventDefault()
        await login(values.email, values.password)
    };

    const handleChange = (e) => {
        setValues(current => ({ ...current, [e.target.name]: e.target.value }))
    }

    function validEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
            if (email.indexOf("@cvsu.edu.ph", email.length - "@cvsu.edu.ph".length) !== -1) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    const navigate = useNavigate()

    const joinLink = () => {
        navigate("/join-us", { replace: true })
    }

    const heroLink = () => {
        navigate("/", { replace: true })
    }

    return (
        <>
            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{ duration: 1.5 }}
                className='parent-wrapper w-full h-screen relative'>

                <img src="https://ik.imagekit.io/efpqj5mis/gradient_1_Cu7n0Rq7PR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671371950247" alt="" className='w-full h-full absolute pointer-events-none select-none top-0 right-0'></img>
                <div className='max-w-[1600px] h-full mx-auto flex'>
                    <div className='flex justify-center items-center lg:h-full lg:w-full'>
                        <LoginHero />
                    </div>

                    <div className='w-full relative'>
                        <LoginNav isActive="login" />
                        <div className='h-[80%] flex items-center justify-center'>

                            <motion.div className='w-[60%] mx-auto max-w-[250px] font-space'>

                                <motion.img
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 100, y: 0 }}
                                    transition={{ delay: 0.05 }}
                                    src="https://ik.imagekit.io/efpqj5mis/LogoWingman_c3G261ZWo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671375425432"
                                    alt="Logo"
                                    className='mx-auto m-4 cursor-pointer h-24'
                                    onClick={heroLink}/>

                                {signinInputs.map((val, i) => {
                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 100, y: 0 }}
                                            transition={{ delay: i * 0.05 }}>
                                            <FormInput key={val.id} {...val} value={val[values.name]} error={valuesError[val.name]} showError={showError[val.name]} onChange={handleChange} />
                                        </motion.div>
                                    )
                                })}

                                <div>
                                    <button
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 100, y: 0 }}
                                        transition={{ delay: 3 * 0.05 }}
                                        className='bg-orng w-full h-[40px] text-center text-blk flex items-center justify-center text-sm font-bold rounded-[2px] border-[2px] border-blk select-none cursor-pointer mb-2 lg:mb-5 hover:bg-light-orng transition-all ease-in-out duration-[0.2s]'
                                        onClick={handleSubmit}>SIGN IN
                                    </button>
                                </div>

                                {/* {error && <div className="error">{error}</div>} */}
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 100, y: 0 }}
                                    transition={{ delay: 3 * 0.05 }}
                                    className='text-sm text-blk text-center cursor-pointer hover:underline'
                                    onClick={joinLink}>I want to create an account</motion.p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login