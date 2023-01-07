import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        //when user logs out, remove its data from local storage
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
    }

    return { logout }
}