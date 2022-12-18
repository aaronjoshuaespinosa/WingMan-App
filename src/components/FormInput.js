import React from 'react'

const FormInput = (props) => {
    const  { ...inputProps } = props
    return (
        <input {...inputProps} className='bg-white w-full h-[40px] border-[2px] border-blk rounded-[2px] font-space text-sm pl-[12px] mb-5 outline-none'></input>
    )
}

export default FormInput