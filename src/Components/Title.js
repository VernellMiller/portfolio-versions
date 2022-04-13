import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <div class="title navbar-brand mt-2">
        <a href="#" class="navbar-brand mt-2">
          <div class="display-5 font-weight-bold">this.</div>
        </a>
      </div>
    </Link>
  );
};

export default Title;
