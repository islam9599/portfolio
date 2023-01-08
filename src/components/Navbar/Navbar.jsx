import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll/modules";
import { themeContext } from "../../Context";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="n-wrapper"
      style={{ backgroundColor: darkMode ? "#000" : "#fff" }}
    >
      <div className="n-left">
        <div className="n-name">Islombek</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
              className="li"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="About"
              smooth={true}
              activeClass="activeClass"
              className="li"
            >
              <li>About</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeClass"
              className="li"
            >
              <li>Portfolio</li>
            </Link>
            <li>Projects</li>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
