import React, { createContext, useReducer } from 'react'

export const ComplaintsContext = createContext()

export const ComplaintsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_COMPLAINTS':
            return {
                complaints: action.payload
            }
        case 'CREATE_COMPLAINT':
            return {
                complaints: [action.payload, ...state.complaints]
            }
        default:
            return state
    }
}

export const ComplaintsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ComplaintsReducer, {
        complaints: null
    })
    return (
        <ComplaintsContext.Provider value={{...state, dispatch}}>
            { children }
        </ComplaintsContext.Provider>
    )
}