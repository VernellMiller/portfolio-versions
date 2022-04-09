import React from "react";
import Title from "./Title";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand d-flex flex-column align-items-start"
        id="sidebar"
      >
        <a href="#" class="navbar-brand mt-5">
          <div class="display-5 font-weight-bold">this.</div>
        </a>
        <ul class="navbar-nav d-flex flex-colum mt-5 w-100">
          <li class="nav-item w-100">
            <a href="#" class="nav-link pl-4">
              Getting Started
            </a>
          </li>
          <li class="nav-item dropdown w-100">
            <a
              href="#"
              class="nav-link dropdown-toggle pl-4"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              About Me
            </a>
            <ul class="dropdown-menu wo-100 aria-expanded">
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
          <li class="nav-item dropdown w-100">
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
            <ul class="dropdown-menu wo-100 aria-expanded">
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
          <li class="nav-item dropdown w-100">
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
            <ul class="dropdown-menu wo-100 aria-expanded">
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
          <li class="nav-item dropdown w-100">
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
            <ul class="dropdown-menu wo-100 aria-expanded">
              <li>
                <a href="#" class="dropdown-item pl-4 p-2">
                  Contact Me
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* <div class="sidenav bg-light">
        <Title />
        <NavigationLinks />
      </div> */}
    </>
  );
};

export default Navigation;
