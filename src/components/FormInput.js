import React from 'react'
import { useEffect } from 'react'

const FormInput = (props) => {

    const { error, empty, ...inputProps } = props

    useEffect(() => {
        console.log(error)
      }, [error])

    return (
        <div className="relative">
            <input {...inputProps} className='peer bg-white w-full h-[40px] border-[2px] border-blk rounded-[2px] font-space text-sm px-[12px] mb-5 outline-none cursor-text' autocomplete="off"></input>
            <p className='absolute top-1 right-[17rem] w-full text-right text-sm'>{error}</p>
        </div>
    )
}

export default FormInput