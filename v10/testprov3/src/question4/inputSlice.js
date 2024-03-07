import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    value: "",
  },
  reducers: {
    setInput: (state, payload) => {
      state.value = payload;
    },
  },
});

export const { setInput } = counterSlice.actions;

export default counterSlice.reducer;
