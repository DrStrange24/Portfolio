import { Home } from "./pages";
import { Toast, ThemeProvider } from "./components";

export const App = () => {
  return (
    <ThemeProvider>
      <Home />
      <Toast />
    </ThemeProvider>
  );
};
