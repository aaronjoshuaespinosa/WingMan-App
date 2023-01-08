import React from 'react'

const FormInput = (props) => {
    const { ...inputProps } = props
    return (
        <div className="relative">
            <input {...inputProps} className='peer bg-white w-full h-[40px] border-[2px] border-blk rounded-[2px] font-space text-sm px-[12px] mb-5 outline-none cursor-text'></input>
        </div>
    )
}

export default FormInput