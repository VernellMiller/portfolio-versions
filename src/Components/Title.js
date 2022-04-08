import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div class="title">
      <Link to="/">
        <p>Onward</p> {/* TODO I want to put a logo here. */}
      </Link>
    </div>
  );
};

export default Title;
