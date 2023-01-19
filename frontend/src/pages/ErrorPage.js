import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeroNav } from '../components'

const ErrorPage = () => {

  const navigate = useNavigate()

  const dashLink = () => {
    navigate("/dashboard")
  }

  return (
    <>
      <div className='font-space'>
        <HeroNav />
      </div>

      <div className='flex items-center justify-center w-full h-[70vh] font-space'>
        <div className='flex flex-col items-center justify-center w-full gap-y-4'>
          <p className='text-9xl font-bold text-orng'>404</p>
          <p className='font-bold'>Whoops! Seems you landed nowhere, perhaps the link you've requested was invalid!</p>
          <p className='bg-wht border-blk border-[2px] rounded-full py-2 px-6 font-bold cursor-pointer hover:drop-shadow-hoverShadow transition-all ease-in-out duration-[0.1s]' onClick={dashLink}>Back to WingMan</p>
        </div>
      </div>
    </>
  )
}

export default ErrorPage