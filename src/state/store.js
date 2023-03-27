import { configureStore } from "@reduxjs/toolkit";
import officeReducer from './office'
import userReducer from './user'

const store = configureStore({
    reducer: {
        office: officeReducer,
        user: userReducer,
    }
})

export default store