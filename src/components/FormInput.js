import React from 'react'

const FormInput = (props) => {
    const { ...inputProps } = props
    return (
        <div className="relative">
            <input {...inputProps} className='peer bg-white w-full h-[40px] border-[2px] border-blk rounded-[2px] font-space text-sm px-[12px] mb-2 lg:mb-5 outline-none'></input>
            <p className="peer-hover:block hidden absolute text-xs right-[-5rem] z-10 top-0 bg-white py-2 px-3 rounder-[3px]" >kontoltip</p>
        </div>
    )
}

export default FormInput