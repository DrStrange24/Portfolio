import "./App.css";
import {
  Certificates,
  Educations,
  Introduction,
  Projects,
  WorkHistory,
} from "./components";
import { ThemeProvider } from "./theme/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/index.scss";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Introduction />
        <WorkHistory />
        <Projects />
        <Educations />
        <Certificates />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
