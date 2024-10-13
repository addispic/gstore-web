import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {
    usersDirection: "LOGIN",
    isUserRegistering: false,
    isAuthorized: false,
    errors: null,
    user: null,
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

// is user authenticated
export const isUserAuthenticated = createAsyncThunk("users/isUserAuthenticated", async () =>{
    try{
        const response = await axios.get("/api/users/is-user-authenticated")
        return response.data
    }catch(err){
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
        resetUserDirection: (state) => {
            state.usersDirection = "LOGIN"
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
                    state.isAuthorized = false
                }
                if(action.payload?.message === "authenticated"){
                    state.isAuthorized = true
                    state.errors = null
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
                    state.isAuthorized = false
                }
                if(action.payload?.message === "authenticated"){
                    state.isAuthorized = true
                    state.errors = null
                }
            })
            // rejected
            .addCase(userLogin.rejected, state => {
                state.isUserRegistering = false
            })
            // is user authenticated
            // pending
            .addCase(isUserAuthenticated.pending, state => {
                // pending
            })
            // fulfilled
            .addCase(isUserAuthenticated.fulfilled, (state,action)=>{
                console.log(action.payload)
                if(action.payload?.error === "unauthorized"){
                    state.user = null
                    state.isAuthorized = false
                }
                if(action.payload?.user){
                    state.user = action.payload.user
                }
            })
            // rejected
            .addCase(isUserAuthenticated.rejected, state => {
                // rejected
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
// user
export const userSelector = state => state.users.user
// is authorized
export const isAuthorizedSelector = state => state.users.isAuthorized

// actions
export const {
    usersDirectionSetter,
    resetErrors,
    resetUserDirection,
} = usersSlice.actions

// reducer
export default usersSlice.reducer