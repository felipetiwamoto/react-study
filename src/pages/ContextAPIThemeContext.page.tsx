import { ThemeComponentSample } from "../contexts/theme/ThemeComponentSample";
import { ThemeProvider } from "../contexts/theme/ThemeProvider";

export function ContextAPIThemeContextPage() {
    return (
        <ThemeProvider>
            <ThemeComponentSample />
        </ThemeProvider>
    )
}