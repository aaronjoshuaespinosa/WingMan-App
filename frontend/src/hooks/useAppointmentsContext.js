import { useContext } from 'react'
import { AppointmentsContext } from '../context/AppointmentContext'

export const useAppointmentsContext = () => {
    const context = useContext(AppointmentsContext)

    if(!context) {
        throw Error('useAppointmentsContext must be used inside an AppointmentsContextProvider');
    }

    return context
}