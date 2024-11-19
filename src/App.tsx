import { ThemeProvider } from "./theme/ThemeContext";
import { Home } from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "./styles/variables.scss";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  return (
    <ThemeProvider>
      <Home />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme={"dark"} // Choose theme: "light", "dark", or "colored"
      />
    </ThemeProvider>
  );
};
