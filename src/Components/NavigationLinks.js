import React from "react";

const NavigationLinks = () => {
  return (
    <div class="navlinks">
      <ul>
        <li>
          <a class="text-decoration-none" href="about">
            Getting Started
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a class="text-decoration-none" href="about">
            About Me
          </a>
          <div>
            <ul>
              <li>
                <a class="text-decoration-none" href="earlyLife">
                  Early Life
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="career">
                  Career
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="passions">
                  Passions
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="interest">
                  Interest
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a class="text-decoration-none" href="about">
            Development Projects
          </a>
          <div>
            <ul>
              <li>
                <a class="text-decoration-none" href="project1">
                  Project 1
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="roject2">
                  Project 2
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="project3">
                  Project 3
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="project4">
                  Project 4
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a class="text-decoration-none" href="2d3d">
            2D | 3D Projects
          </a>
          <div>
            <ul>
              <li>
                <a class="text-decoration-none" href="2d">
                  2D Design
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="3D">
                  3D Design
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="branding">
                  Branding
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="logos">
                  Logos
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a class="text-decoration-none" href="blogs">
            Blogs
          </a>
        </li>
        <li>
          <a class="text-decoration-none" href="support">
            Support
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
