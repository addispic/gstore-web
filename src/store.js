import {configureStore} from '@reduxjs/toolkit'

// reducers
// users
import usersReducer from './features/users/usersSlice'

// store
export const store = configureStore({
    reducer: {
        users: usersReducer,
    }
})