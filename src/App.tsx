import { ZustandCategoriesStorePage } from "./pages/ZustandCategoriesStore.page";
import { CustomHookCounterPage } from "./pages/CustomHookCounter.page";
import { ContextAPIThemeContextPage } from "./pages/ContextAPIThemeContext.page";

export function App() {
  return (
    <>
      <CustomHookCounterPage />
      <ContextAPIThemeContextPage />
      <ZustandCategoriesStorePage />
    </>
  )
}