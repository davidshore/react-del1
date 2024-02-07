import { configureStore } from "@reduxjs/toolkit";

// importera reduers som vi skriver sen
import loginReducer from "./redux/login";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
