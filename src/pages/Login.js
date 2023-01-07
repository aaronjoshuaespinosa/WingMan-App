import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormInput, LoginHero, LoginNav } from '../components'
import { signinInputs } from '../constants'
import { useLogin } from '../hooks/useLogin'


const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const { login, error, isLoading } = useLogin()

    const [valuesError, setError] = useState({
        email: null,
        password: null,
    })

    const handleSubmit = async (e) => {
        e.preventDefault() //prevents reloading page after clicking the button

        console.log(values.email, values.password)

        await login(values.email, values.password)
    };

    const handleChange = (e) => {
        setValues(current => ({ ...current, [e.target.name]: e.target.value }))

        //EMAIL VALIDATION
        if (values.email === "") {
            setError(data => ({ ...data, 'email': 'Email cannot be empty.' }))
        } else if (!(validEmail(values.email))) {
            setError(data => ({ ...data, 'email': 'Invalid Email.' }))
        } else {
            setError(data => ({ ...data, 'email': '' }))
        }

        //PASSWORD VALIDATION
        if (values.password === "") {
            setError(data => ({ ...data, 'password': 'Password cannot be empty.' }))
        }
        else if (values.password.length <= 8) {
            setError(data => ({ ...data, 'password': 'Invalid Password.' }))
        }
        else {
            setError(data => ({ ...data, 'password': '' }))
        }
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

    return (
        <>
            <div className='parent-wrapper w-full h-screen relative'>
                <img src="https://ik.imagekit.io/efpqj5mis/gradient_1_Cu7n0Rq7PR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671371950247" alt="" className='w-full h-full absolute pointer-events-none select-none top-0 right-0'></img>
                <div className='max-w-[1600px] h-full mx-auto flex'>

                    <LoginHero />

                    <div className='w-full relative'>
                        <LoginNav isActive="login" />
                        <div className='h-[80%] flex items-center justify-center'>
                            <div className='mainForm w-[60%] mx-auto max-w-[250px] font-space'>
                                <img src="https://ik.imagekit.io/efpqj5mis/LogoWingman_c3G261ZWo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671375425432" alt="Logo" className='mx-auto m-4 pointer-events-none select-none' />

                                    {signinInputs.map(val => {
                                        return (
                                            <FormInput key={val.id} {...val} value={val[values.name]} onChange={handleChange} />
                                        )
                                    })}

                                    <button className='bg-orng w-full h-[40px] text-center text-blk flex items-center justify-center text-sm font-bold rounded-[2px] border-[2px] border-blk select-none cursor-pointer mb-2 lg:mb-5' style={valuesError.email === '' && valuesError.password === '' ? {pointerEvents: "auto", opacity: "100%"} : {pointerEvents: "none", opacity: "50%"}}>SIGN IN</button>

                                <p className='text-sm text-blk text-center cursor-pointer hover:underline' onClick={joinLink}>I want to create an account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login