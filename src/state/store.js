import { configureStore } from "@reduxjs/toolkit";
import officeReducer from "./office";
import userReducer from "./user";
import addressReducer from "./address";
import allUsersReducer from "./allUsers";

import allReportsReducer from "./allReports";

import newReportReducer from "./newReport";
import activeStepReducer from "./activeStep";
import changeTypeUserReducer from "./changeTypeUser";

const store = configureStore({
  reducer: {
    office: officeReducer,
    user: userReducer,
    address: addressReducer,
    allUsers: allUsersReducer,

    allReports: allReportsReducer,

    newReport: newReportReducer,
    activeStep: activeStepReducer,
    changeType: changeTypeUserReducer,
  },
});

export default store;
