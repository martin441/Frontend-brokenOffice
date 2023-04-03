import { configureStore } from "@reduxjs/toolkit";
import officeReducer from "./office";
import userReducer from "./user";
import addressReducer from "./address";
import allUsersReducer from './allUsers'
import newReportReducer from './newReport'
import activeStepReducer from './activeStep'

const store = configureStore({
  reducer: {
    office: officeReducer,
    user: userReducer,
    address: addressReducer,
    allUsers: allUsersReducer,
    newReport: newReportReducer,
    activeStep: activeStepReducer
  },
});

export default store;
