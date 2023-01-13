import React, { useState } from 'react'
import { useMarketsContext } from '../hooks/useMarketsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const MarketForm = () => {
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
        const market = {fullName, title, type, description, price, fbLink, email, contactNumber};
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
        if(response.ok) {
            setTitle('')
            setType('')
            setDescription('')
            setPrice('')
            setFbLink('')
            setContactNumber('')
            setError(null)

            dispatch({type: 'CREATE_OFFER', payload: json});
        }
    }
    return (
        <div>
            <form onSubmit={(handleSubmit)}>
                <h1>Create your transaction!</h1>
                <label>Offer Title:</label>
                <input 
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label>Offer Type:</label>
                <input 
                    type="radio"
                    onClick={(e) => setType(e.target.value)}
                    value="Product/Item"
                    id="Product/Item"
                    name="Choice"
                /><label for="Product/Item">Product/Item</label>
                <input 
                    type="radio"
                    onClick={(e) => setType(e.target.value)}
                    value="Service"
                    id="Service"
                    name="Choice"
                /><label for="Service">Service (ex. commissions)</label>
                <label>Price:</label>
                <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                <label>Description:</label>
                <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <h1>Your contact details</h1>
                <label>Facebook Link:</label>
                <input
                    type="text"
                    onChange={(e) => setFbLink(e.target.value)}
                    value={fbLink}
                />
                <label>Contact Number (optional):</label>
                <input
                    type="text"
                    onChange={(e) => setContactNumber(e.target.value)}
                    value={contactNumber}
                />
                <button>Add transaction</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default MarketForm