import "./App.css";
import Navigation from "./Components/Navigation";
import GettingStarted from "./Pages/GettingStarted";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <body className="App-body">
          <Navigation />
          <GettingStarted />
          <Blogs />
          <Contact />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </body>
      </div>
    </>
  );
}

export default App;
