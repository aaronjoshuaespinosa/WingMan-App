import React from 'react'
import { motion } from 'framer-motion'

const ProfileCard = (props) => {

    const {
        img,
        name,
        role1,
        role2,
        twtrIcon,
        twtrLink,
        twtrState,
        fbIcon,
        fbLink,
        fbState,
        igIcon,
        igLink,
        igState,
        ghIcon,
        ghLink,
        ghState
    } = props

    return (
        <>
            <div className='bg-wht border-blk border-[2px] rounded-[5px] text-blk flex flex-col justify-center items-center px-[24px] py-[36px] w-80'>

                {/* IMG */}
                <div className='overflow-hidden rounded-full w-60'>
                    <motion.img
                        whileHover={{ scale: 1.07 }}
                        src={img}
                        className="w-full rounded-full cursor-pointer" />
                </div>

                {/* NAME */}
                <motion.p
                    whileHover={{ color: '#FC5F1C', scale: 1.05, y: -3, rotate: -1.5 }}
                    className='font-bold text-xl text-center pt-3 select-none'>{name}</motion.p>

                {/* TITLES */}
                <div className='flex flex-col items-center text-sm text-center pb-5 select-none'>
                    <p>{role1}</p>
                    <p>{role2}</p>
                </div>

                {/* ICONS */}
                <div className='flex flex-row text-2xl gap-x-3'>

                    {/* GITHUB ICON */}
                    <p
                        className='hover:text-orng transition-all ease-in-out duration-[0.2s]'
                        style={ghState ? { display: 'block' } : { display: 'none' }}><a href={ghLink} target="_blank">{ghIcon}</a>
                    </p>

                    {/* FACEBOOK ICON */}
                    <p
                        className='hover:text-orng transition-all ease-in-out duration-[0.2s]'
                        style={fbState ? { display: 'block' } : { display: 'none' }}><a href={fbLink} target="_blank">{fbIcon}</a>
                    </p>

                    {/* TWITTER ICON */}
                    <p
                        className='hover:text-orng transition-all ease-in-out duration-[0.2s]'
                        style={twtrState ? { display: 'block' } : { display: 'none' }}><a href={twtrLink} target="_blank">{twtrIcon}</a>
                    </p>

                    {/* INSTAGRAM ICON */}
                    <p
                        className='hover:text-orng transition-all ease-in-out duration-[0.2s]'
                        style={igState ? { display: 'block' } : { display: 'none' }}><a href={igLink} target="_blank">{igIcon}</a>
                    </p>

                </div>
            </div>
        </>
    )
}

export default ProfileCard