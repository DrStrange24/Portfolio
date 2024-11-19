import { Home } from "./pages";
import { Toast, ThemeProvider } from "./components";
import "./App.css";
import "./styles/variables.scss";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <ThemeProvider>
      <Home />
      <Toast />
    </ThemeProvider>
  );
};
