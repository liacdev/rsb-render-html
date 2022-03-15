import logo from "./logo.svg";
import "./App.css";
import RenderHTML from "./Components/render-html.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Render HTML</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-render-html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <RenderHTML />
      </header>
    </div>
  );
}

export default App;
