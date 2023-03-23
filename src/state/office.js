import { createAction, createReducer } from "@reduxjs/toolkit";

export const setOffices = createAction("SET_OFFICES");
export const deleteOffice = createAction("DELETE_OFFICES");

const reducer = createReducer([], {
  [setOffices]: (state, action) => {
    return action.payload;
  },
  [deleteOffice]: (state, action) => {
    state.filter((office) => office._id !== action.payload._id);
  },
});

export default reducer;
