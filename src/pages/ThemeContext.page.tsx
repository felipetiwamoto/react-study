import { ThemeComponentSample } from "../contexts/theme/ThemeComponentSample";
import { ThemeProvider } from "../contexts/theme/ThemeProvider";

export function ThemeContextPage() {
    return (
        <ThemeProvider>
            <ThemeComponentSample />
        </ThemeProvider>
    )
}