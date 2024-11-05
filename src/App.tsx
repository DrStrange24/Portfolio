import "./App.css";
import { ThemeProvider } from "./theme/ThemeContext";
import "./styles/variables.scss";
import "./styles/index.scss";
import { Home } from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};
