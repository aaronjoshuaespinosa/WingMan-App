import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: {
        value: false
    }
}

export const toggleSlice = createSlice({
    name: "navToggle",
    initialState,
    reducers: {
        setToggle: (state, action) => {
            state.toggle = action.payload
        }
    }
})

export const { setToggle } = toggleSlice.actions
export default toggleSlice.reducer