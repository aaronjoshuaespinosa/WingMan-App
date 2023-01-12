import React, { createContext, useReducer } from 'react'

export const AppointmentsContext = createContext()

export const appointmentsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_APPOINTMENTS':
            return {
                appointments: action.payload
            }
        case 'CREATE_APPOINTMENT':
            return {
                appointments: [action.payload, ...state.appointments]
            }
        default:
            return state
    }
}

export const AppointmentsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appointmentsReducer, {
        appointments: null
    })

    return (
        <AppointmentsContext.Provider value={{...state, dispatch}}>
            { children }
        </AppointmentsContext.Provider>
    )
}