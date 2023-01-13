import React, { createContext, useReducer } from 'react'

export const MarketsContext = createContext();

export const marketsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_OFFERS':
            return {
               markets: action.payload
            }
        case 'CREATE_OFFER':
            return {
                markets: [action.payload, ...state.markets]
            }
        //step 39
        case 'DELETE_OFFER':
            return {
                markets: state.markets.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
};

export const MarketsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(marketsReducer, {
        markets: null
    });

    // dispatch({type: 'SET_MARKETS', payload: [{}, {}]});
    
    return (
        <MarketsContext.Provider value={{...state, dispatch}}>
            { children }
        </MarketsContext.Provider>
    )
}