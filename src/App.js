import "./App.css";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";
import GettingStarted from "./Pages/GettingStarted";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <GettingStarted />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
