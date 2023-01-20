import React from 'react'
import { useEffect } from 'react'

const FormInput = (props) => {

    const { error, showError, empty, ...inputProps } = props

    useEffect(() => {
      }, [error])

    return (
        <div className="relative">
            <input {...inputProps} className='bg-white w-full h-[40px] border-[2px] border-blk rounded-[2px] font-space text-sm px-[12px] mb-[12px] outline-none cursor-text' autoComplete="off" style={showError === true ? {borderColor: 'red'} : {borderColor: 'black'}}></input>
            <p className='absolute top-1 right-[19.5rem] w-full text-right text-sm' style={showError === true ? {display: 'block'} : {display: 'none'}}>{error}</p>
        </div>
    )
}

export default FormInput