import { ZustandCategoriesStorePage } from "./pages/ZustandCategoriesStore.page";
import { CustomHookCounterPage } from "./pages/CustomHookCounter.page";
import { ContextAPIThemeContextPage } from "./pages/ContextAPIThemeContext.page";
import { TailwindPrimaryPage } from "./pages/TailwindPrimaryPage";

export function App() {
  return (
    <>
      <CustomHookCounterPage />
      <ContextAPIThemeContextPage />
      <ZustandCategoriesStorePage />
      <TailwindPrimaryPage />
    </>
  )
}