// 1a. Återanvändbara komponenter 2p
// Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 1b. Återanvändbara komponenter med children 2p
// Skapa en komponent ButtonWithChildren som änvänder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 1c. Återanvändbara komponenter med icon 2p
// Skapa en komponent ButtonWithIcon som tar en title och icon som props.
// Använd valfritt icon-bibliotek. Använd komponenten 2 gånger med olika
// title och icon.

import Button from "./Button";
import ButtonWithChildren from "./ButtonWithChildren";
import ButtonWithIcon from "./ButtonWithIcon";
import { BsTrash, BsFillHandThumbsUpFill } from "react-icons/bs";

function App() {
  return (
    <div>
      <div>
        <Button title="First Button" color="red" />
        <Button title="Second Button" color="yellow" />
      </div>
      <div>
        <ButtonWithChildren color="blue">Third Button</ButtonWithChildren>
        <ButtonWithChildren color="purple">Fourth Button</ButtonWithChildren>
      </div>
      <div>
        <ButtonWithIcon title="Delete" icon={<BsTrash />} />
        <ButtonWithIcon title="Thumb up" icon={<BsFillHandThumbsUpFill />} />
      </div>
    </div>
  );
}

export default App;
// 6p
