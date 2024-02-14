import { createSlice } from "@reduxjs/toolkit";
import { UserSliceData } from "../types/user";

const initialState: UserSliceData = {
  isLoggedIn: false,
  userData: null,
  accessToken: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
    setUserData: (state, { payload }) => {
      state.userData = payload;
      state.isLoggedIn = Boolean(payload);
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

export const { setUserData, logoutUser, setAccessToken } = userSlice.actions;

export default userSlice;
