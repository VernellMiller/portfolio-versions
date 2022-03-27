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
            <a>Getting Started</a>
          </li>
        </ul>

        <ul>
          <li>
            <a>About Me</a>
            <ul>
              <li>
                <a>Early Life</a>
              </li>
              <li>
                <a>Interest</a>
              </li>
              <li>
                <a>Passion</a>
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

        <ul>
          <li>Blogs</li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
