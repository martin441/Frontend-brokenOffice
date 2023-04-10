import { configureStore } from "@reduxjs/toolkit";
import officeReducer from "./office";
import userReducer from "./user";
import addressReducer from "./address";
import allUsersReducer from "./allUsers";
import allReportsReducer from "./allReports";
import newReportReducer from "./newReport";
import changeTypeUserReducer from "./changeTypeUser";
import serviceReducer from './service'
import chatReducer from "./chat"

const store = configureStore({
  reducer: {
    office: officeReducer,
    user: userReducer,
    address: addressReducer,
    allUsers: allUsersReducer,
    allReports: allReportsReducer,
    newReport: newReportReducer,
    changeType: changeTypeUserReducer,
    service: serviceReducer,
    chat: chatReducer,
  },
});

export default store;
