import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <div className="title navbar-brand mt-2">
        <a href="#" className="navbar-brand mt-2">
          <div className="display-5 font-weight-bold">this.</div>
        </a>
      </div>
    </Link>
  );
};

export default Title;
