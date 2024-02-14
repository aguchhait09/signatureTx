import { createSlice } from "@reduxjs/toolkit";
import { CommonSliceData } from "redux/@types/common.slice";

const initialState: CommonSliceData = {
  helloWorld: "",
};

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    sayHello: (state, { payload }) => {
      state.helloWorld = payload;
    },
  },
});

export const { sayHello } = commonSlice.actions;

export default commonSlice;
