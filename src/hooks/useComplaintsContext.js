import { useContext } from 'react'
import { ComplaintsContext } from '../context/ComplaintContext'

export const useComplaintsContext = () => {
    const context = useContext(ComplaintsContext)

    if(!context) {
        throw Error('useComplaintsContext must be used inside an ComplaintsContextProvider')
    }

    return context
}