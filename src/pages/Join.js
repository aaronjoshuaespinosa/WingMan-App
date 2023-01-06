import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormInput, LoginHero, LoginNav } from '../components'
import { joinusInputs } from '../constants'

const Join = () => {

    const [values, setValues] = useState({
        fName: null,
        lName: null,
        studentNum: null,
        username: null,
        email: null,
        password: null,
        confPassword: null
    })

    const [valuesError, setError] = useState({
        fName: null,
        lName: null,
        studentNum: null,
        username: null,
        email: null,
        password: null,
        confPassword: null
    })

    const handleChange = (e) => {
        setValues(current => ({ ...current, [e.target.name]: e.target.value }))

        //FIRST NAME VALIDATION
        if (values.fName === "") {
            setError(data => ({ ...data, 'fName': 'First name cannot be empty.' }))
        }
        else if (!(validName(values.fName))) {
            setError(data => ({ ...data, 'fName': 'Invalid First Name.' }))
        }
        else {
            setError(data => ({ ...data, 'fName': '' }))
        }

        //LAST NAME VALIDATION
        if (values.lName === "") {
            setError(data => ({ ...data, 'lName': 'Last name cannot be empty.' }))
        }
        else if (!(validName(values.fName))) {
            setError(data => ({ ...data, 'lName': 'Invalid Last Name.' }))
        }
        else {
            setError(data => ({ ...data, 'lName': '' }))
        }

        //USERNAME VALIDATION
        if (values.username === "") {
            setError(data => ({ ...data, 'username': 'Username cannot be empty.' }))
        }
        else {
            setError(data => ({ ...data, 'username': '' }))
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

        // CONFIRM PASSWORD VALIDATION
        if (values.password === values.confPassword) {
            setError(data => ({ ...data, 'confPassword': '' }))
        }
        else {
            setError(data => ({ ...data, 'confPassword': 'Password does not match.' }))
        }

        //EMAIL VALIDATION
        if (values.email === "") {
            setError(data => ({ ...data, 'email': 'Email cannot be empty.' }))
        } else if (!(validEmail(values.email))) {
            setError(data => ({ ...data, 'email': 'Invalid Email.' }))
        } else {
            setError(data => ({ ...data, 'email': '' }))
        }

        //STUDENT NUMBER VALIDATION
        if (validStudentno(values.studentNum)) {
            setError(data => ({ ...data, 'studentNum': '' }))
        } else {
            setError(data => ({ ...data, 'studentNum': 'Invalid Student Number.' }))
        }
    }

    function validName(str) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.{2,25})/.test(str)
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

    function validStudentno(str) {
        return /^[0-9]{9,9}$/.test(str)
    }

    //POST FORM INPUT
    const handleClick = () => {
        console.log(values)
    }

    const navigate = useNavigate()

    const signLink = () => {
        navigate("/sign-in", { replace: true })
    }

    return (
        <>
            <div className='parent-wrapper w-full h-screen relative'>
                <img src="https://ik.imagekit.io/efpqj5mis/gradient_1_Cu7n0Rq7PR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671371950247" alt="" className='w-full h-full absolute pointer-events-none select-none top-0 right-0'></img>
                <div className='max-w-[1600px] h-full mx-auto flex'>

                    <LoginHero />

                    <div className='w-full relative'>
                        <LoginNav isActive="join" />
                        <div className='h-[80%] flex items-center justify-center'>
                            <div className='mainForm w-[60%] mx-auto max-w-[250px] font-space'>
                                <img src="https://ik.imagekit.io/efpqj5mis/LogoWingman_c3G261ZWo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671375425432" alt="Logo" className='mx-auto m-4 pointer-events-none select-none' />
                                {joinusInputs.map(val => {
                                    return (
                                        <FormInput key={val.id} {...val} value={val[values.name]} onChange={handleChange}/>
                                    )
                                })}
                                
                                <button className='bg-orng w-full h-[40px] text-center text-blk flex items-center justify-center text-sm font-bold rounded-[2px] border-[2px] border-blk select-none cursor-pointer mb-2 lg:mb-5' onClick={handleClick} style={ valuesError.fName === '' && valuesError.lName === '' &&  valuesError.username === '' && valuesError.studentNum === '' && valuesError.email === '' && valuesError.password === '' && valuesError.confPassword === '' ? {pointerEvents: "auto", opacity: "100%"} : {pointerEvents: "none", opacity: "50%"}}>JOIN US</button>
                                <p className='text-sm text-blk text-center cursor-pointer' onClick={signLink}
                                >I already have an account</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Join