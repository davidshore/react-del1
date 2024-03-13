import { useState } from "react";

export default function Panel({ children, title, collapsible }) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div className="flex items-center justify-between w-96">
        <h2>{title}</h2>
        {collapsible && (
          <button onClick={() => setShow(!show)}>
            {show ? "Mindre" : "Visa"}
          </button>
        )}
      </div>
      {show && <p>{children}</p>}
    </div>
  );
}
