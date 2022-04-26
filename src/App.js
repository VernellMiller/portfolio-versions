import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./Components/Navigation";
import GettingStarted from "./Pages/GettingStarted";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Project1 from "./Pages/Project1";
import Project2 from "./Pages/Project2";
import Project3 from "./Pages/Project3";
import Project4 from "./Pages/Project4";
import Squares from "./Pages/Squares";
import TwoD from "./Pages/TwoD";
import Footer from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <>
      {/* <Router> */}
      <div className="App">
        <div className="App-body">
          <Navigation />
          <Routes>
            <Route path="/" element={<GettingStarted />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />

            <Route path="project1" element={<Project1 />} />
            <Route path="project2" element={<Project2 />} />
            <Route path="project3" element={<Project3 />} />
            <Route path="project4" element={<Project4 />} />

            <Route path="squares" element={<Squares />} />

            <Route path="twoD" element={<TwoD />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
