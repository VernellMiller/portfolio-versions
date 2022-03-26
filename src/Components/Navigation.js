import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div class="sidenav bg-light">
        <header class="title">
          <Link to="/">
            <p>Onward</p> {/* TODO I want to put a logo here. */}
          </Link>
        </header>

        <ul>
          <li>
            <p>Getting Started</p>
          </li>
        </ul>

        <ul>
          <li>
            <p>About Me</p>
            <ul>
              <li>
                <p>Early Life</p>
              </li>
              <li>
                <p>Interest</p>
              </li>
              <li>
                <p>Passion</p>
              </li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>Projects</li>
        </ul>

        <ul>
          <li>Artwork</li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
