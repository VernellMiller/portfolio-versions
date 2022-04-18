import React, { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [show, setShow] = React.useState(true);
  const [show1, setShow1] = React.useState(true);
  const [show2, setShow2] = React.useState(true);
  const [show3, setShow3] = React.useState(true);

  return (
    <>
      {/* {show ? <h1>Hello World!</h1> : null}
      <button onClick={() => setShow(true)}>show</button>
      <button onClick={() => setShow(false)}>hide</button>
      <button onClick={() => setShow(!show)}>toggle</button> */}

      <div class="sidenav">
        <nav
          class="navbar navbar-expand d-flex flex-column align-items-start"
          id="sidebar"
        >
          <Title />

          <ul class="navbar-nav d-flex flex-column mt-4 w-100">
            <li class="nav-item">
              <Link to="/" class="nav-link pl-4">
                Getting Started
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link pl-4"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setShow(!show)}
              >
                About Me
              </a>
              {show ? (
                <ul aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="about" class="dropdown-item pl-4 p-2">
                      Early Life
                    </Link>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item pl-4 p-2">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item pl-4 p-2">
                      Passions
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item pl-4 p-2">
                      Interests
                    </a>
                  </li>
                </ul>
              ) : null}
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link pl-4"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setShow1(!show1)}
              >
                Development Projects
              </a>
              {show1 ? (
                <ul class=" w-100" aria-expanded="false">
                  <li>
                    <Link to="project1" class="dropdown-item pl-4 p-2">
                      Project 1
                    </Link>
                  </li>
                  <li>
                    <Link to="project2" class="dropdown-item pl-4 p-2">
                      Project 2
                    </Link>
                  </li>
                  <li>
                    <Link to="project3" class="dropdown-item pl-4 p-2">
                      Project 3
                    </Link>
                  </li>
                  <li>
                    <Link to="project4" class="dropdown-item pl-4 p-2">
                      Project 4
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link pl-4"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setShow2(!show2)}
              >
                2D | 3D Projects
              </a>
              {show2 ? (
                <ul class=" w-100" aria-expanded="false">
                  <li>
                    <a href="#" class="dropdown-item pl-4 p-2">
                      2D Design
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item pl-4 p-2">
                      3D Design
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item pl-4 p-2">
                      Branding
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item pl-4 p-2">
                      Logos
                    </a>
                  </li>
                </ul>
              ) : null}
            </li>
            <li class="nav-item">
              <Link to="blogs" class="nav-link pl-4">
                Blogs
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link pl-4"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setShow3(!show3)}
              >
                Support
              </a>
              {show3 ? (
                <ul class=" w-100" aria-expanded="false">
                  <li>
                    <Link to="contact" class="dropdown-item pl-4 p-2">
                      Contact Me
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
