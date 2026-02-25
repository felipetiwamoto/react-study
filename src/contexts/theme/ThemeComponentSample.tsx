import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeComponentSample() {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggle}>Toggle Theme</button>
        </div>
    )
}