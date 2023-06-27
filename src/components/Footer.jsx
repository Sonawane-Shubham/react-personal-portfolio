import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="" target="_blank">
          <InstagramIcon />
        </Link>
        <Link to="https://twitter.com/iamshubh1707" target="_blank">
          <TwitterIcon />
        </Link>
        <Link to="" target="_blank">
          <FacebookIcon />
        </Link>
        <Link
          to="https://www.linkedin.com/in/shubham-sonawane-77b749192/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </div>
      <p> &copy; 2022 shubhamsonawane</p>
    </div>
  );
}

export default Footer;
