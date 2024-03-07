// 3. input och knapp i en komponent med redux. 3p
// Skapa en komponent: InputAndButtonRedux som innehåller ett text-fält och en knapp.
// När man klickar på knappen ska det man skrev sparas i Redux och
// visas i en div i App.jsx.

import { Provider } from "react-redux";
import InputCreate from "./InputCreate";
import InputRead from "./InputRead";
import { store } from "./store";

// installera redux:
// npm i react-redux @reduxjs/toolkit

// inputSlice.js

// store.js

// Provider runt alla komponenter som ska kunna läsa och
// skriva från redux.

// Koppla komponenterna till redux

function App() {
  return (
    <Provider store={store}>
      <InputCreate />
      <InputRead />
    </Provider>
  );
}

export default App;
// 3p
