import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSocket = createAction("SET_SOCKET");
export const setRoom = createAction("SET_ROOM");
export const setChatId = createAction("SET_CHATID");
export const setNotificationsSolver = createAction("SET_NOTIFICATIONS_SOLVER");
export const setNotificationsIssuer = createAction("SET_NOTIFICATIONS_ISSUER");

const initialState = {
  notifications: {
    solver: "",
    issuer: "",
  },
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
  [setNotificationsSolver]: (state, action) => {
    state.notifications.solver = action.payload;
  },
  [setNotificationsIssuer]: (state, action) => {
    state.notifications.issuer = action.payload;
  },
});

export default reducer;
