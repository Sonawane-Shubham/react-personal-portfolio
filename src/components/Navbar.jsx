import React, { useEffect, useState } from "react";
import { Link as Linkk, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  // console.log(location.pathname);

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Linkk
          to="/"
          className={`link ${location.pathname === "/" ? "myactive" : ""}`}
        >
          Home
        </Linkk>
        <Linkk to="about" className="link">
          About
        </Linkk>
        <Linkk
          to="/projects"
          className={`link ${
            location.pathname === "/projects" ? "myactive" : ""
          }`}
        >
          Projects
        </Linkk>
        <Link to="contactme" className="link">
          Contact
        </Link>
        <Linkk
          to="/experience"
          className={`link ${
            location.pathname === "/experience" ? "myactive" : ""
          }`}
        >
          Experience
        </Linkk>
      </div>
    </div>
  );
}

export default Navbar;
