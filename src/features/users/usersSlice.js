import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    usersDirection: "LOGIN"
}

// slice
// users slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersDirectionSetter: (state,action) => {
            state.usersDirection = action.payload
        }
    },
    extraReducers: builder => {

    }
})

// selectors
// users direction
export const usersDirectionSelector = state => state.users.usersDirection

// actions
export const {
    usersDirectionSetter,
} = usersSlice.actions

// reducer
export default usersSlice.reducer