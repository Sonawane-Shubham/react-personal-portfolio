import React, { useEffect, useState } from "react";
import { Link as Linkk, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    let url = window.location.href.split("/");

    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    console.log(element);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  });

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
        <Linkk to="/" className="link">
          Home
        </Linkk>
        <Link
          to="about"
          smooth={true}
          offset={40}
          duration={500}
          className="link"
        >
          About
        </Link>
        <Linkk to="/projects" className="link">
          Projects
        </Linkk>
        <Link
          to="contactme"
          smooth={true}
          offset={30}
          duration={800}
          className="link"
        >
          Contact
        </Link>
        <Linkk to="/experience" className="link">
          Experience
        </Linkk>
      </div>
    </div>
  );
}

export default Navbar;
