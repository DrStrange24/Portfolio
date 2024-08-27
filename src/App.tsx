import "./App.css";
import {
  Certificates,
  Educations,
  Introduction,
  Projects,
  WorkHistory,
} from "./components";

function App() {
  return (
    <div className="App">
      <Introduction />
      <WorkHistory />
      <Projects />
      <Educations />
      <Certificates />
    </div>
  );
}

export default App;
