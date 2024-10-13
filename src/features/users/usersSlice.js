import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {
    usersDirection: "LOGIN",
    isUserRegistering: false,
    errors: null
}

// register
export const userRegister = createAsyncThunk("users/userRegister", async data =>{
    try {
        const response = await axios.post("/api/users/register", data)
        return response.data
    } catch (err) {
        return err.response.data
    }
})

// login
export const userLogin = createAsyncThunk("users/userLogin", async data => {
    try {
        const response = await axios.post("/api/users/login", data)
        return response.data
    } catch (err) {
        return err.response.data
    }
})

// slice
// users slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersDirectionSetter: (state,action) => {
            state.usersDirection = action.payload
        },
        resetErrors: state => {
            state.errors = null
        },
    },
    extraReducers: builder => {
        builder 
            // cases
            // user register
            // pending
            .addCase(userRegister.pending, state => {
                state.isUserRegistering = true
            })
            // fulfilled
            .addCase(userRegister.fulfilled, (state,action)=>{
                state.isUserRegistering = false 
                if(action.payload.errors){
                    state.errors = action.payload.errors
                }
            })
            // rejected
            .addCase(userRegister.rejected, state =>{
                state.isUserRegistering = false
            })
            // login
            // pending
            .addCase(userLogin.pending, state => {
                state.isUserRegistering = true
            })
            // fulfilled
            .addCase(userLogin.fulfilled, (state,action) => {
                state.isUserRegistering = false
                if(action.payload.errors){
                    state.errors = action.payload.errors
                }
                console.log(action.payload)
            })
            // rejected
            .addCase(userLogin.rejected, state => {
                state.isUserRegistering = false
            })
    }
})

// selectors
// users direction
export const usersDirectionSelector = state => state.users.usersDirection
// is user registering
export const isUserRegisteringSelector = state => state.users.isUserRegistering
// errors
export const errorsSelector = state => state.users.errors

// actions
export const {
    usersDirectionSetter,
    resetErrors,
} = usersSlice.actions

// reducer
export default usersSlice.reducer