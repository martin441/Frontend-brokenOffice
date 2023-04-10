import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSocket = createAction("SET_SOCKET");
export const setRoom = createAction("SET_ROOM");
export const setChatId = createAction("SET_CHATID");

const initialState = {
  socket: {},
  room: "",
  chatId: "",
};

const reducer = createReducer(initialState, {
  [setSocket]: (state, action) => {
    state.socket = action.payload;
  },
  [setRoom]: (state, action) => {
    state.room = action.payload;
  },
  [setChatId]: (state, action) => {
    state.chatId = action.payload;
  },
  
});

export default reducer;
