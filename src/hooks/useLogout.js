import { useAuthContext } from './useAuthContext'

import { useFaqsContext } from './useFaqsContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const {dispatch: faqsDispatch} = useFaqsContext()

    const logout = () => {
        //when user logs out, remove its data from local storage
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})

        faqsDispatch({type: 'SET_FAQS', payload:null})
    }

    return { logout }
}