import { createAction, createReducer } from "@reduxjs/toolkit";

export const setActiveStep = createAction("SET_ACTIVE_STEP");

const reducer = createReducer(
 0,
  {
    [setActiveStep]: (state, action) => {
      return action.payload;
    },
  }
);

export default reducer;
