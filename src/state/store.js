import { configureStore } from "@reduxjs/toolkit";
import officeReducer from './office'

const store = configureStore({
    reducer: {
        office: officeReducer
    }
})

export default store