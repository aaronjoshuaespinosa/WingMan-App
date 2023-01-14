import React from 'react'
import { useMarketsContext } from '../hooks/useMarketsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { BsFillImageFill } from "react-icons/bs";

const MPService = ({ market }) => {
    const { user } = useAuthContext()
    const { dispatch } = useMarketsContext()
    const handleClick = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/marketplace/` + market._id, {
            method: 'DELETE',
        })
        const json = await response.json();

        if(response.ok) {
            dispatch({type: 'DELETE_OFFER', payload: json});
        }
    }
    return (
        <>
            <div className='flex flex-col w-full h-80 transition-drop-shadow ease-in-out duration-[0.1s] cursor-pointer'>

                <div className='bg-light-gry h-5/6 w-full border-x-[2px] border-t-[2px] border-blk rounded-t-[3px] text-blk flex items-center justify-center transition-all ease-in-out duration-[0.2s] text-8xl hover:text-9xl'>
                    <BsFillImageFill/>
                    {/* <p>Offer Type: {market.type}</p>
                    <p>Description: {market.description}</p>
                    <p>Contact Details:</p>
                    <p>Facebook Link: <a href={market.fbLink}>{market.fbLink}</a></p>
                    <p>Email: {market.email}</p>
                    <p>Contact Number: {market.contactNumber}{!market.contactNumber && <p>Not provided</p>}</p> */}

                    {/*DELETE BUTTON, ikaw bahala man saan mo lalagay */}
                    {/* {market.fullName === `${user.data.firstName}` + ` ` + `${user.data.lastName}` && <button onClick={handleClick}>Delete</button>} */}
                </div>

                <div className='flex w-full h-2/6'>
                    <div className='bg-wht w-full px-3 flex flex-col justify-center border-y-[2px] border-l-[2px] border-blk rounded-bl-[3px]'>
                        <p className='text-blk font-black text-base hover:underline cursor-pointer'>{market.title}</p>
                        <div><p className='text-light-gry text-sm hover:underline cursor-pointer'>{market.fullName}</p></div>
                    </div>
                    <div className='bg-orng flex items-center justify-center p-5 border-y-[2px] border-x-[2px] border-blk rounded-br-[3px] hover:bg-light-orng cursor-pointer transition-all ease-in-out duration-[0.2s]'>
                        <p className='font-bold text-wht'>P{market.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MPService