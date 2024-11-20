import { Home } from "./pages";
import { Toast, ThemeProvider, SpinnerProvider } from "./components";

export const App = () => {
  return (
    <ThemeProvider>
      <SpinnerProvider>
        <Home />
        <Toast />
      </SpinnerProvider>
    </ThemeProvider>
  );
};
