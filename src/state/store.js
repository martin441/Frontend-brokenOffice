import { configureStore } from "@reduxjs/toolkit";
import officeReducer from "./office";
import userReducer from "./user";
import addressReducer from "./address";

const store = configureStore({
  reducer: {
    office: officeReducer,
    user: userReducer,
    address: addressReducer,
  },
});

export default store;
