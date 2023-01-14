import React, { createContext, useReducer } from 'react'

export const FaqsContext = createContext()

export const FaqsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAQS':
            return {
                faqs: action.payload
            }
        case 'CREATE_FAQ':
            return {
                faqs: [action.payload, ...state.faqs]
            }
        case 'DELETE_FAQ':
            return {
                faqs: state.faqs.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const FaqsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FaqsReducer, {
        faqs: null
    })
    // dispatch({type: 'SET_FAQS', payload: [{}, {}]});
    return (
        <FaqsContext.Provider value={{...state, dispatch}}>
            { children }
        </FaqsContext.Provider>
    )
}