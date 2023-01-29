import React, { useState } from 'react'
import { useMarketsContext } from '../hooks/useMarketsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const MarketForm = (props) => {

    const { onClick } = props

    const { user } = useAuthContext()

    const { dispatch } = useMarketsContext()
    const fullName = `${user.data.firstName}` + ` ` + `${user.data.lastName}`
    const [title, setTitle] = useState()
    const [type, setType] = useState()
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [fbLink, setFbLink] = useState('')
    const email = `${user.data.email}`
    const [contactNumber, setContactNumber] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const market = { fullName, title, type, description, price, fbLink, email, contactNumber };
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/marketplace`, {
            method: 'POST',
            body: JSON.stringify(market),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError('Please fill the fields correctly.');
        }
        //if response is okay, remove all contents in form field
        if (response.ok) {
            setTitle('')
            setType('')
            setDescription('')
            setPrice('')
            setFbLink('')
            setContactNumber('')
            setError(null)

            dispatch({ type: 'CREATE_OFFER', payload: json });
        }
    }
    return (
        <div className='bg-light-lgry flex flex-col p-5 border-blk border-[2px] rounded-[3px]'>
            <form onSubmit={(handleSubmit)} className="flex flex-col gap-y-[12px] w-full">

                <div className='flex justify-between items-center'>
                    <p className='font-bold text-2xl'>Create Transaction</p>
                    <p className='py-1 px-3 bg-orng border-blk border-[2px] rounded-[3px] font-bold cursor-pointer hover:drop-shadow-hoverShadow transition-all ease-in-out duration-[0.1s]' onClick={onClick}>X</p>
                </div>
                <p className='italic text-sm'>NOTE: Any formation in this form will be used in the marketplace page to provide other users information about your product and ways to contact you, the seller.</p>

                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="w-full p-[12px] border-blk border-[2px] rounded-[3px]"
                    placeholder='Marketplace Title'
                />

                <textarea
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="resize-y p-[12px] border-blk border-[2px] rounded-[3px] h-auto min-h-[3.2rem] max-h-[7rem] lg:max-h-48 lg:h-full"
                    placeholder='Description'
                />

                <div>
                    <p className='font-bold text-xl'>Contact Details</p>
                    <div className='w-full'>
                        <p>Facebook Link:</p>
                        <input
                            type="text"
                            onChange={(e) => setFbLink(e.target.value)}
                            value={fbLink}
                            className="w-full p-[12px] border-blk border-[2px] rounded-[3px] mb-3"
                            placeholder='http://url'
                        />
                        <p>Contact Number (optional):</p>
                        <input
                            type="text"
                            onChange={(e) => setContactNumber(e.target.value)}
                            value={contactNumber}
                            className="w-full p-[12px] border-blk border-[2px] rounded-[3px]"
                            placeholder='(+63)'
                        />
                    </div>
                </div>

                <div className='flex flex-row w-full gap-x-5'>
                    <div className='flex flex-col w-full'>
                        <p className='font-bold text-xl pb-2'>Price:</p>
                        <input
                            type="text"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            className="w-full p-[12px] border-blk border-[2px] rounded-[3px]"
                            placeholder='10'
                        />
                    </div>

                    <div className='flex flex-col w-full'>
                        <p className='font-bold text-xl pb-2'>Offer Type:</p>
                        <div className='flex flex-col'>
                            <div className='flex gap-x-2'>
                                <input
                                    type="radio"
                                    onClick={(e) => setType(e.target.value)}
                                    value="Product/Item"
                                    id="Product/Item"
                                    name="Choice"
                                />
                                <label for="Product/Item">Product/Item</label>
                            </div>

                            <div className='flex gap-x-2'>
                                <input
                                    type="radio"
                                    onClick={(e) => setType(e.target.value)}
                                    value="Service"
                                    id="Service"
                                    name="Choice"
                                />
                                <label for="Service">Service (ex. commissions)</label>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BUTTON & ERROR MSSG */}
                <div className='flex w-full justify-center items-center lg:justify-end gap-x-5'>
                    {error && <div className="error justify-self-start w-full">{error}</div>}
                    <button
                        className='px-5 py-2 font-bold bg-orng border-[2px] border-blk text-blk rounded-[3px] transition-all ease-in-out duration-[0.1s] hover:drop-shadow-hoverShadow w-full lg:w-auto'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default MarketForm