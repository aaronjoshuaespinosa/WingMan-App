import React from 'react'

const LoginHero = () => {
    return (
        <div className='hidden lg:block w-full font-space font-bold text-orng'>
            <div className='pl-10'>
                <h1 className='text-8xl mt-20'>An assistant</h1>
                <p className='text-2xl mt-[-10px]'>for your daily and not-so-daily needs.</p>
            </div>
            <div className='h-[65%] flex items-center justify-center'>
                <img src="https://ik.imagekit.io/efpqj5mis/Woman_nxHldLABo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671378483389" alt="babae" className='w-[35rem] md:w-[40rem] ' />
            </div>
        </div>
    )
}

export default LoginHero