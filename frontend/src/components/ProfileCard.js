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
            <div className='bg-wht border-blk border-[2px] rounded-[5px] text-blk flex flex-col justify-center items-center p-[24px] hover:drop-shadow-hoverShadow cursor-pointer transition-all ease-in-out duration-[0.1s]'>

                {/* IMG */}
                <div className='overflow-hidden rounded-full'>
                    <motion.img
                        whileHover={{ scale: 1.07 }}
                        src={img}
                        className="w-48 h-48 rounded-full cursor-pointer m-5" />
                </div>

                {/* NAME */}
                <p className='font-bold text-2xl'>{name}</p>

                {/* TITLES */}
                <div className='flex flex-col items-center text-sm'>
                    <p>{role1}</p>
                    <p>{role2}</p>
                </div>

                {/* ICONS */}
                <div className='flex flex-row text-2xl gap-x-3 py-5'>

                    {/* GITHUB ICON */}
                    <p
                        className='hover:text-orng transition-all ease-in-out duration-[0.2s]'
                        style={ghState ? { display: 'block' } : { display: 'none' }}>{ghIcon}
                    </p>

                    {/* FACEBOOK ICON */}
                    <p
                        className='hover:text-orng transition-all ease-in-out duration-[0.2s]'
                        style={fbState ? { display: 'block' } : { display: 'none' }}>{fbIcon}
                    </p>

                    {/* TWITTER ICON */}
                    <p
                        className='hover:text-orng transition-all ease-in-out duration-[0.2s]'
                        style={twtrState ? { display: 'block' } : { display: 'none' }}>{twtrIcon}
                    </p>

                    {/* INSTAGRAM ICON */}
                    <p
                        className='hover:text-orng transition-all ease-in-out duration-[0.2s]'
                        style={igState ? { display: 'block' } : { display: 'none' }}>{igIcon}
                    </p>

                </div>
            </div>
        </>
    )
}

export default ProfileCard