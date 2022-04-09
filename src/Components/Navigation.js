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
        <NavigationLinks />
      </nav>
    </>
  );
};

export default Navigation;
