import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormInput, LoginHero, LoginNav } from '../components'
import { signinInputs } from '../constants'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevents reloading page after clicking the button

        console.log(email, password);
    };

    const handleChange = (e) => {
        setValues(current => ({ ...current, [e.target.name]: e.target.value }))
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

                                <form onSubmit={handleSubmit}>
                                    {signinInputs.map(val => {
                                        return (
                                            <FormInput key={val.id} {...val} value={val[values.name]} onChange={handleChange} />
                                        )
                                    })}

                                    <button className='bg-orng w-full h-[40px] text-center text-blk flex items-center justify-center text-sm font-bold rounded-[2px] border-[2px] border-blk select-none cursor-pointer mb-2 lg:mb-5'>SIGN IN</button>
                                </form>

                                <p className='text-sm text-blk text-center cursor-pointer' onClick={joinLink}>I want to create an account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login