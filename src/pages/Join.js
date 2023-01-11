import { data } from 'autoprefixer'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormInput, LoginHero, LoginNav } from '../components'
import { joinusInputs } from '../constants'
import { useSignup } from '../hooks/useSignup'

const Join = () => {

    const navigate = useNavigate()

    const signLink = () => {
        navigate("/sign-in", { replace: true })
    }

    const { signup, error, isLoading } = useSignup()

    const [values, setValues] = useState({
        fName: '',
        lName: '',
        studentNum: '',
        username: '',
        email: '',
        password: '',
        confPassword: ''
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

    const [showError, setShowError] = useState({
        fName: false,
        lName: false,
        studentNum: false,
        username: false,
        email: false,
        password: false,
        confPassword: false
    })

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

    const handleChange = (e) => {
        setValues(current => ({ ...current, [e.target.name]: e.target.value }))

        //FIRST NAME VALIDATION
        if (values.fName === "") {
            setError(data => ({ ...data, 'fName': 'Must not be empty.' }))
        }
        else if (!(validName(values.fName))) {
            setError(data => ({ ...data, 'fName': 'Must only contain alphabets.' }))
        }
        else {
            setError(data => ({ ...data, 'fName': '' }))
        }

        //LAST NAME VALIDATION
        if (values.lName === "") {
            setError(data => ({ ...data, 'lName': 'Must not be empty.' }))
        }
        else if (!(validName(values.lName))) {
            setError(data => ({ ...data, 'lName': 'Must only contain alphabets.' }))
        }
        else {
            setError(data => ({ ...data, 'lName': '' }))
        }

        //USERNAME VALIDATION
        if (values.username === "") {
            setError(data => ({ ...data, 'username': 'Must not be empty.' }))
        }
        else if (values.username.length <= 8) {
            setError(data => ({ ...data, 'username': 'Must be 8 characters and above.' }))
        }
        else {
            setError(data => ({ ...data, 'username': '' }))
        }

        //PASSWORD VALIDATION
        if (values.password === "") {
            setError(data => ({ ...data, 'password': 'Must not be empty.' }))
        }
        else if (values.password.length <= 8) {
            setError(data => ({ ...data, 'password': 'Password must be 8 characters and above.' }))
        }
        else {
            setError(data => ({ ...data, 'password': '' }))
        }

        // CONFIRM PASSWORD VALIDATION
        if (values.confPassword === "") {
            setError(data => ({ ...data, 'confPassword': 'Must not be empty.' }))
        }
        else if (values.confPassword.length <= 8) {
            setError(data => ({ ...data, 'confPassword': 'Password must be 8 characters and above.' }))
        }
        else if (values.confPassword === values.password) {
            setError(data => ({ ...data, 'confPassword': '' }))
        }
        else {
            setError(data => ({ ...data, 'confPassword': 'Password does not match.' }))
        }

        //EMAIL VALIDATION
        if (values.email === "") {
            setError(data => ({ ...data, 'email': 'Must not be empty.' }))
        } else if (!(validEmail(values.email))) {
            setError(data => ({ ...data, 'email': 'Must contain \"@cvsu.edu.ph\"' }))
        } else {
            setError(data => ({ ...data, 'email': '' }))
        }

        //STUDENT NUMBER VALIDATION
        if (values.studentNum === "") {
            setError(data => ({ ...data, 'studentNum': 'Must not be empty.' }))
        }
        else if (values.studentNum.length !== 9) {
            setError(data => ({ ...data, 'studentNum': 'Must be 9 digits.' }))
        }
        else {
            setError(data => ({ ...data, 'studentNum': '' }))
        }
    }

    //POST FORM INPUT
    const handleClick = async (e) => {
        e.preventDefault()
        await signup(values.fName, values.lName, values.studentNum, values.email, values.username, values.password)

        //FIRST NAME VALIDATION
        if (values.fName === "") {
            setError(data => ({ ...data, 'fName': 'Must not be empty.' }))
            setShowError(data => ({ ...data, 'fName': true }))
        }
        else if (!(validName(values.fName))) {
            setError(data => ({ ...data, 'fName': 'Must only contain alphabets.' }))
            setShowError(data => ({ ...data, 'fName': true }))
        }
        else {
            setError(data => ({ ...data, 'fName': '' }))
            setShowError(data => ({ ...data, 'fName': false }))
        }

        //LAST NAME VALIDATION
        if (values.lName === "") {
            setError(data => ({ ...data, 'lName': 'Must not be empty.' }))
            setShowError(data => ({ ...data, 'lName': true }))
        }
        else if (!(validName(values.lName))) {
            setError(data => ({ ...data, 'lName': 'Must only contain alphabets.' }))
            setShowError(data => ({ ...data, 'lName': true }))
        }
        else {
            setError(data => ({ ...data, 'lName': '' }))
            setShowError(data => ({ ...data, 'lName': false }))
        }

        //USERNAME VALIDATION
        if (values.username === "") {
            setError(data => ({ ...data, 'username': 'Must not be empty.' }))
            setShowError(data => ({ ...data, 'username': true }))
        }
        else if (values.username.length <= 8) {
            setError(data => ({ ...data, 'username': 'Must be 8 characters and above.' }))
            setShowError(data => ({ ...data, 'username': true }))
        }
        else {
            setError(data => ({ ...data, 'username': '' }))
            setShowError(data => ({ ...data, 'username': false }))
        }

        //PASSWORD VALIDATION
        if (values.password === "") {
            setError(data => ({ ...data, 'password': 'Must not be empty.' }))
            setShowError(data => ({ ...data, 'password': true }))
        }
        else if (values.password.length <= 8) {
            setError(data => ({ ...data, 'password': 'Password must be 8 characters and above.' }))
            setShowError(data => ({ ...data, 'password': true }))
        }
        else {
            setError(data => ({ ...data, 'password': '' }))
            setShowError(data => ({ ...data, 'password': false }))
        }

        // CONFIRM PASSWORD VALIDATION
        if (values.confPassword === "") {
            setError(data => ({ ...data, 'confPassword': 'Must not be empty.' }))
            setShowError(data => ({ ...data, 'confPassword': true }))
        }
        else if (values.confPassword.length <= 8) {
            setError(data => ({ ...data, 'confPassword': 'Password must be 8 characters and above.' }))
            setShowError(data => ({ ...data, 'confPassword': true }))
        }
        else if (values.confPassword === values.password) {
            setError(data => ({ ...data, 'confPassword': '' }))
            setShowError(data => ({ ...data, 'confPassword': false }))
        }
        else {
            setError(data => ({ ...data, 'confPassword': 'Password does not match.' }))
            setShowError(data => ({ ...data, 'confPassword': true }))
        }

        //EMAIL VALIDATION
        if (values.email === "") {
            setError(data => ({ ...data, 'email': 'Must not be empty.' }))
            setShowError(data => ({ ...data, 'email': true }))
        } else if (!(validEmail(values.email))) {
            setError(data => ({ ...data, 'email': 'Must contain \"@cvsu.edu.ph\"' }))
            setShowError(data => ({ ...data, 'email': true }))
        } else {
            setError(data => ({ ...data, 'email': '' }))
            setShowError(data => ({ ...data, 'email': false }))
        }

        //STUDENT NUMBER VALIDATION
        if (values.studentNum === "") {
            setError(data => ({ ...data, 'studentNum': 'Must not be empty.' }))
            setShowError(data => ({ ...data, 'studentNum': true }))
        }
        else if (values.studentNum.length !== 9) {
            setError(data => ({ ...data, 'studentNum': 'Must be 9 digits.' }))
            setShowError(data => ({ ...data, 'studentNum': true }))
        }
        else {
            setError(data => ({ ...data, 'studentNum': '' }))
            setShowError(data => ({ ...data, 'studentNum': false }))
        }
    }

    return (
        <>
            <div className='parent-wrapper w-full h-screen relative'>
                <img src="https://ik.imagekit.io/efpqj5mis/gradient_1_Cu7n0Rq7PR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671371950247" alt="" className='w-full h-full absolute pointer-events-none select-none top-0 right-0'></img>
                <div className='max-w-[1600px] h-full mx-auto flex'>

                    <div className='flex justify-center items-center lg:h-full lg:w-full'>
                        <LoginHero />
                    </div>

                    <div className='w-full relative'>
                        <LoginNav isActive="join" />
                        <div className='h-[80%] flex items-center justify-center'>
                            <div className='mainForm w-[70%] mx-auto max-w-[250px] font-space'>
                                <img src="https://ik.imagekit.io/efpqj5mis/LogoWingman_c3G261ZWo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671375425432" alt="Logo" className='mx-auto m-2 pointer-events-none select-none h-24' />

                                {joinusInputs.map(val => {
                                    return (
                                        <FormInput key={val.id} {...val} value={val[values.name]} error={valuesError[val.name]} showError={showError[val.name]} onChange={handleChange} />
                                    )
                                })}

                                <button className='bg-orng w-full h-[40px] text-center text-blk flex items-center justify-center text-sm font-bold rounded-[2px] border-[2px] border-blk select-none cursor-pointer mb-2 lg:mb-5 hover:bg-light-orng transition-all ease-in-out duration-[0.2s]' style={valuesError.email === '' && valuesError.password === '' && valuesError.confPassword === '' && valuesError.fName === '' && valuesError.lName === '' && valuesError.username === '' && valuesError.studentNum === '' ? { pointerEvents: "auto", opacity: "100%" } : { pointerEvents: "none", opacity: "50%" }} onClick={handleClick}>JOIN US</button>
                                {error && <div className="mb-2 lg:mb-2">{error}</div>}
                                <p className='text-sm text-blk text-center cursor-pointer hover:underline' onClick={signLink}
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