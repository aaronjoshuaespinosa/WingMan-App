import React from 'react'

const FormInput = (props) => {
    const { tooltip, ...inputProps } = props
    return (
        <div className="relative">
            <input {...inputProps} className='peer bg-white w-full h-[40px] border-[2px] border-blk rounded-[2px] font-space text-sm px-[12px] mb-5 outline-none cursor-text'></input>
            <p {...inputProps} className="peer-hover:opacity-100 opacity-0 absolute h-[40px] whitespace-nowrap bg-wht border-blk border-[2px] rounded-[3px] align-center justify-center text-xs left-[16rem] z-10 top-0 p-2 transition-all ease-in-out duration-[0.2s]">{tooltip}</p>
        </div>
    )
}

export default FormInput