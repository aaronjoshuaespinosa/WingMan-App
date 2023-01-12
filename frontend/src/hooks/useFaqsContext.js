import { useContext } from "react"
import { FaqsContext } from '../context/FaqsContext'

export const useFaqsContext = () => {
    const context = useContext(FaqsContext)

    if(!context) {
        throw Error('useWFaqsContext must be used inside an FaqsContextProvider')
    }

    return context
}