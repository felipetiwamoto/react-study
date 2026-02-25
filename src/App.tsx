import { CategoriesStorePage } from "./pages/CategoriesStore.page";
import { CounterPage } from "./pages/Counter.page";
import { ThemeContextPage } from "./pages/ThemeContext.page";

export function App() {
  return (
    <>
      <CounterPage />
      <ThemeContextPage />
      <CategoriesStorePage />
    </>
  )
}