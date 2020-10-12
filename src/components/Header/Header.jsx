import React from "react";
import PropTypes from "prop-types";

import { NavBar } from "../NavBar/NavBar";
import "./style.css";

export function Header(props) {
  return (
    <header className="header">
      <NavBar />
      <div className="container mt-2">
        <div className="page-head">
          <div className="page-title">
            <h1 className="title-1">All Products</h1>
            <p className="mt-small">
              A 360
              <sup>o </sup>
              look at Lumin
            </p>
          </div>
          <div className="filter-bar">
            <select name="filter" className="">
              <option selected defaultValue disabled>
                Filter by
              </option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {};
