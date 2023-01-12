import { useAuthContext } from './useAuthContext'
import { useFaqsContext } from './useFaqsContext'
import { useComplaintsContext } from './useComplaintsContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const {dispatch: faqsDispatch} = useFaqsContext()
    const {dispatch: complaintsDispatch} = useComplaintsContext()

    const logout = () => {
        //when user logs out, remove its data from local storage
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})

        faqsDispatch({type: 'SET_FAQS', payload: null})
        complaintsDispatch({type: 'SET_COMPLAINTS', payload: null})
    }

    return { logout }
}