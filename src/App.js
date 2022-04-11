import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./Components/Navigation";
import GettingStarted from "./Pages/GettingStarted";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <>
      {/* <Router> */}
      <div className="App">
        <body className="App-body">
          <Navigation />
          <Routes>
            <Route path="/" element={<GettingStarted />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </body>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
