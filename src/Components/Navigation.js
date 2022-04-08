import React from "react";
import Title from "./Title";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
  return (
    <>
      <div class="sidenav bg-light">
        <Title />
        <NavigationLinks />
      </div>
    </>
  );
};

export default Navigation;
