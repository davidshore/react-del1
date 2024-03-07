import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputSlice";

export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});

// const store = {
//   input: {
//     value: "sadsdaew"
//   }
// };
