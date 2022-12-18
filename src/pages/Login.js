import React from 'react'
import LoginNav from '../components/LoginNav'
import FormInput from '../components/FormInput'
import LoginHero from '../components/LoginHero'
import { useState } from 'react'

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "text",
            placeholder: "Enter your CvSU Email"
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password"
        }
    ]

    const handleChange = (e) => {
        setValues(current => ({ ...current, [e.target.name]: e.target.value }))
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

                                {inputs.map(val => {
                                    return (
                                        <FormInput key={val.id} {...val} value={val[values.name]} onChange={handleChange} />
                                    )
                                })}

                                <div className='bg-orng w-full h-[40px] text-center text-blk flex items-center justify-center text-sm font-bold rounded-[2px] border-[2px] border-blk select-none cursor-pointer mb-4'>SIGN IN</div>

                                <p className='text-sm text-blk text-center cursor-pointer'>Forgot Password</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login