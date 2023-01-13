import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('https://wingman-app-api.vercel.app/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ email, password })
        });

        //no need to insert localhost since there is already a proxy on package.json

        const json = await response.json();
        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            //saving the user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            //updating the auth context
            dispatch({ type: 'LOGIN', payload: json });
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};