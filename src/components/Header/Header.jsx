import React from "react";
import PropTypes from "prop-types";

import { NavBar } from "../NavBar/NavBar";
import "./style.css";

export function Header(props) {
  return (
    <div className="header">
      <NavBar />
    </div>
  );
}

Header.propTypes = {};
