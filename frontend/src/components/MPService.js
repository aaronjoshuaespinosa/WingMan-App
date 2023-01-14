import React, { useState } from 'react'
import { useMarketsContext } from '../hooks/useMarketsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { BsFillImageFill, BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";

const MPService = (props) => {

    const { market } = props

    const [show, setShow] = useState(true)

    const showDesc = () => {
        setShow(current => !current)
        console.log(show)
    }

    const { user } = useAuthContext()
    const { dispatch } = useMarketsContext()
    const handleClick = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/marketplace/` + market._id, {
            method: 'DELETE',
        })
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_OFFER', payload: json });
        }
    }
    return (
        <>
            <div className='flex flex-col w-full h-80 cursor-pointer' onClick={showDesc}>

                <div className='bg-light-gry h-5/6 w-full border-x-[2px] border-t-[2px] border-blk rounded-t-[3px] text-blk flex items-center justify-center transition-all ease-in-out duration-[0.2s] text-8xl hover:text-9xl p-[24px]' style={!show ? { backgroundColor: '#1E1E1E' } : { backgroundColor: '#838383' }}>
                    <BsFillImageFill style={show ? { display: "block" } : { display: "none" }} />
                    <div className='text-base text-wht flex flex-col w-full overflow-hidden relative' style={!show ? { display: "block" } : { display: "none" }}>
                        <div className='flex flex-col'>
                            <p className='font-bold uppercase'>Offer Type</p>
                            <p>{market.type}</p>
                        </div>

                        <div className='flex flex-col'>
                            <p className='font-bold uppercase'>Description</p>
                            <p>{market.description}</p>
                        </div>

                        <p className='font-bold uppercase'>Contact Details:</p>
                        <div className='flex flex-row items-center gap-x-2'>
                            <BsFacebook className='text-lg shrink-0' />
                            <p className='text-ellipsis overflow-hidden'><a href={market.fbLink} target="_blank">{market.fbLink}</a></p>
                        </div>

                        <div className='flex flex-row items-center gap-x-2'>
                            <MdMail className='text-lg shrink-0' />
                            <p className='text-ellipsis overflow-hidden'>{market.email}</p>
                        </div>

                        <div className='flex flex-row items-center gap-x-2'>
                            <BsFillTelephoneFill className='text-lg shrink-0' />
                            <p className='text-ellipsis overflow-hidden'>{market.contactNumber}{!market.contactNumber && <p>Not Provided</p>}</p>
                        </div>

                        {/*DELETE BUTTON, ikaw bahala man saan mo lalagay */}
                        {market.fullName === `${user.data.firstName}` + ` ` + `${user.data.lastName}` && <button className='absolute top-0 right-0' onClick={handleClick}><AiTwotoneDelete className='hover:text-red transition-all ease-in-out duration-[0.2s] text-xl' /></button>}
                    </div>
                </div>

                <div className='flex w-full h-2/6'>
                    <div className='bg-wht w-full px-3 flex flex-col justify-center border-y-[2px] border-l-[2px] border-blk rounded-bl-[3px]'>
                        <p className='text-blk font-black text-base hover:underline cursor-pointer'>{market.title}</p>
                        <div><p className='text-light-gry text-sm hover:underline cursor-pointer'>{market.fullName}</p></div>
                    </div>
                    <div className='bg-orng flex items-center justify-center p-5 border-y-[2px] border-x-[2px] border-blk rounded-br-[3px] hover:bg-light-orng cursor-pointer transition-all ease-in-out duration-[0.2s]'>
                        <p className='font-bold text-wht'>₱{market.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MPService