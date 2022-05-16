import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

import { Link } from "react-router-dom";

const OffCanvasNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClose = () => setShowNav(false);
  const handleShow = () => setShowNav(true);

  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  return (
    <>
      <div className="container sticky-top">
        <Button className="btn btn-light shadow mt-2" onClick={handleShow}>
          Menu
        </Button>
      </div>

      <Offcanvas
        show={showNav}
        onHide={handleClose}
        className="shadow"
        id="Offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Vernell Miller</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidenav">
            <nav
              className="navbar navbar-expand d-flex flex-column align-items-start"
              id="sidebar"
            >
              {/* <Title /> */}

              <ul className="navbar-nav d-flex flex-column mt-4 w-100">
                <li className="nav-item">
                  <Link to="/" className="nav-link pl-4">
                    Getting Started
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link pl-4"
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
                        <Link to="about" className="dropdown-item pl-4 p-2">
                          Early Life
                        </Link>
                      </li>
                      {/* <li>
                        <a href="#" className="dropdown-item pl-4 p-2">
                          Career
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item pl-4 p-2">
                          Passions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item pl-4 p-2">
                          Interests
                        </a>
                      </li> */}
                    </ul>
                  ) : null}
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link pl-4"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => setShow1(!show1)}
                  >
                    Development Projects
                  </a>
                  {show1 ? (
                    <ul className=" w-100" aria-expanded="false">
                      <li>
                        <Link to="squares" className="dropdown-item pl-4 p-2">
                          Squares
                        </Link>
                      </li>
                      <li>
                        <Link to="raam" className="dropdown-item pl-4 p-2">
                          RAAM
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="project2" className="dropdown-item pl-4 p-2">
                          Project 2
                        </Link>
                      </li>
                      <li>
                        <Link to="project3" className="dropdown-item pl-4 p-2">
                          Project 3
                        </Link>
                      </li>
                      <li>
                        <Link to="project4" className="dropdown-item pl-4 p-2">
                          Project 4
                        </Link>
                      </li> */}
                    </ul>
                  ) : null}
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link pl-4"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => setShow2(!show2)}
                  >
                    2D | 3D Projects
                  </a>
                  {show2 ? (
                    <ul className=" w-100" aria-expanded="false">
                      <li>
                        <Link to="twod" className="dropdown-item pl-4 p-2">
                          2D Design
                        </Link>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item pl-4 p-2">
                          3D Design
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item pl-4 p-2">
                          Branding
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item pl-4 p-2">
                          Logos
                        </a>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li className="nav-item">
                  <Link to="blogs" className="nav-link pl-4">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link pl-4"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => setShow3(!show3)}
                  >
                    Support
                  </a>
                  {show3 ? (
                    <ul className=" w-100" aria-expanded="false">
                      <li>
                        <Link to="contact" className="dropdown-item pl-4 p-2">
                          Contact Me
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
              </ul>
            </nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvasNav;
