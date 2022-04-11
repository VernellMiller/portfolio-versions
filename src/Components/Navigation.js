import React from "react";
import Title from "./Title";

const Navigation = () => {
  return (
    <>
      <div class="sidenav">
        <nav
          class="navbar navbar-expand d-flex flex-column align-items-start"
          id="sidebar"
        >
          <Title />

          <ul class="navbar-nav d-flex flex-column mt-4 w-100">
            <li class="nav-item">
              <a href="#" class="nav-link pl-4">
                Getting Started
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle pl-4"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Me
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a href="#" class="dropdown-item pl-4 p-2">
                    Early Life
                  </a>
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
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle pl-4"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Development Projects
              </a>
              <ul class="dropdown-menu w-100" aria-expanded="false">
                <li>
                  <a href="#" class="dropdown-item pl-4 p-2">
                    Project 1
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item pl-4 p-2">
                    Project 1
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item pl-4 p-2">
                    Project 3
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item pl-4 p-2">
                    Project 4
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle pl-4"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                2D | 3D Projects
              </a>
              <ul class="dropdown-menu w-100" aria-expanded="false">
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
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link pl-4">
                Blogs
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle pl-4"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Support
              </a>
              <ul class="dropdown-menu w-100" aria-expanded="false">
                <li>
                  <a href="#" class="dropdown-item pl-4 p-2">
                    Contact Me
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
