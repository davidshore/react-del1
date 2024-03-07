// 4. Öka eller minska en siffra med redux. 3p
// En siffra ska visas på sidan och siffran ska vara kopplad till redux.
// Skapa en komponent: LessButtonWithRedux som via redux minskar siffrans
// värde med ett när man klickar på en knapp i komponenten.
// Skapa en button i App.jsx som ökar siffrans värde med ett.
import { Provider } from "react-redux";
import { store } from "./store";
import ReduxApp from "./ReduxApp";

export default function App() {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
}
