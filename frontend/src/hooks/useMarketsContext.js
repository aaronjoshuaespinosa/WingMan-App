import { useContext } from 'react';
import { MarketsContext } from '../context/MarketsContext'

export const useMarketsContext = () => {
    const context = useContext(MarketsContext);

    if (!context) {
        throw Error('useMarketsContext must be used inside an MarketsContextProvider');
    }

    return context;
};