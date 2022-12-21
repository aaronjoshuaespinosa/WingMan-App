import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'

const Marketplace = () => {
    const dispatch = useDispatch()

    const toggle = useSelector((state) => state.Toggle.toggle.value)

    useEffect(() => {
        dispatch(setToggle({ value: !toggle }))
    }, [])

    return (
        <>
            <div>
            </div>
        </>
    )
}

export default Marketplace