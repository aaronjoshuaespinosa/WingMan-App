import React from 'react'

const LoginHero = () => {
    return (
        <div className='hidden lg:block w-full font-space font-bold text-orng '>
            <div>
                <h1 className='xl:text-[5rem] lgmd:text-7xl'>An assistant</h1>
                <p className='text-2xl mt-[-30px]'>for your daily academic needs.</p>
            </div>
            <div className='h-[65%] flex items-center justify-center pt-28'>
                <img src="https://ik.imagekit.io/xzgmktvzg/woman_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673445345188" alt="babae" className='w-[30rem] lg:w-[33rem] custom:w-[25rem]'/>
            </div>
        </div>
    )
}

export default LoginHero