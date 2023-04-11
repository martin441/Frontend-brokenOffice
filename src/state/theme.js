import { createAction, createReducer } from "@reduxjs/toolkit";

export const setTheme = createAction("SET_THEME");

const reducer = createReducer({mode: 'light'}, {
  [setTheme]: (state, action) => {
    if (state.mode === "light") state.mode = "dark";
    else state.mode = "light";
  },
});

export default reducer;
