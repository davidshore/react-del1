import { useEffect, useRef } from "react";

export default function Home() {
  const inputRef = useRef(null);
  const squareRef = useRef(null);
  const squarePos = useRef({ x: 100, y: 100 });

  useEffect(() => {
    inputRef.current.focus();

    function loop() {
      const { x, y } = squarePos.current;
      squareRef.current.style.transform = `translate(${x}px, ${y}px)`;
      squarePos.current = { x: x + 1, y: y + 1 };
      requestAnimationFrame(loop);
    }

    loop();
  }, []);

  return (
    <main>
      <input ref={inputRef} type="text" />

      <div
        ref={squareRef}
        style={{ transform: "translate(100px, 100px)" }}
        className="w-20 h-20 bg-red-500"
      ></div>
    </main>
  );
}
