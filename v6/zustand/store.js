import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUserStore = create(
  devtools((set) => ({
    loggedIn: false,
    username: null,
    login: (username) =>
      set(
        (state) => ({ ...state, loggedIn: true, username }),
        false,
        "user/login"
      ),
    logout: () =>
      set(
        (state) => ({ ...state, loggedIn: false, username: null }),
        false,
        "user/logout"
      ),
  }))
);
