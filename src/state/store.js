import { configureStore } from "@reduxjs/toolkit";
import officeReducer from "./office";
import userReducer from "./user";
import addressReducer from "./address";
import allUsersReducer from "./allUsers";
import allReportsReducer from "./allReports";
import newReportReducer from "./newReport";

const store = configureStore({
  reducer: {
    office: officeReducer,
    user: userReducer,
    address: addressReducer,
    allUsers: allUsersReducer,
    allReports: allReportsReducer,
    newReport: newReportReducer,
  },
});

export default store;
