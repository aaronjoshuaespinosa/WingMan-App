import React from 'react'

const LoginNav = ({ isActive }) => {
  
  return (
    <div className='top-buttons flex w-full justify-between text-blk font-space font-bold uppercase px-[5rem] py-5 max-w-[400px] mx-auto'>
      <div className='relative'>
        <p className='peer hover:text-orng transition-all ease-in-out duration-[0.2s] cursor-pointer'
        style={isActive === 'login' ? {color: "#FC5F1C"} : null}>sign in</p>
        <div className="h-[4px] w-0 bg-orng mx-auto peer-hover:h-[4px] peer-hover:w-[25px] rounded-full  transition-all ease-in-out"
        style={isActive === 'login' ? {height: "4px", width: "25px"} : null}></div>
      </div>


      <div className='relative'>
        <p className='peer hover:text-orng transition-all ease-in-out duration-[0.2s] cursor-pointer'
        style={isActive === 'join' ? {color: "#FC5F1C"} : null}>join us</p>
        <div className="h-[4px] w-0 bg-orng mx-auto peer-hover:h-[4px] peer-hover:w-[25px] rounded-full  transition-all ease-in-out"
        style={isActive === 'join' ? {height: "4px", width: "25px"} : null}></div>
      </div>

    </div>
  )
}

export default LoginNav