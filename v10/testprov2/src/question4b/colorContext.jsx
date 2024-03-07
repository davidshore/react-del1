import { createContext, useReducer, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  const initialState = { color: "black" };

  function reducer(state, action) {
    if (action.type == "setColor") {
      return {
        ...state,
        color: action.color,
      };
    }

    return state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
}
