import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme == "light" ? "text-gray-300" : "text-gray-800"}>
      Theme component
    </div>
  );
}
