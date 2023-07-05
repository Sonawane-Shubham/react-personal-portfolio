import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { SiLeetcode, SiGithub } from "react-icons/si";

import "../styles/Home.css";
import { CloudDownload } from "@material-ui/icons";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shubham Sonawane</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a
            href="https://github.com/Sonawane-Shubham"
            target="_blank
          "
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-sonawane-77b749192/"
            target="_blank
          "
          >
            <LinkedInIcon />
          </a>

          <a
            href="mailto:shubhamsonawane1707@gmail.com"
            target="_blank
          "
          >
            <EmailIcon />
          </a>

          <a
            href="https://leetcode.com/shubham_sonawane/"
            target="_blank
          "
          >
            <SiLeetcode />
          </a>
          <div className="resume-download">
            <p className="download-label"></p>
            <a
              download
              href="/Shubham_Sonawane_Resume.pdf"
              title="download resume"
            >
              <CloudDownload className="resume-download-link" />
              {/* <FaFileDownload/> */}
            </a>
          </div>
        </div>
      </div>
      {/* //about me section */}
      <div className="aboutme" name="about" id="about">
        <h2 className="aboutme-heading"> About me</h2>

        <div className="aboutme-description">
          <p>
            I'm A Final year CSE undergrad at BATU university. I have built
            Full-stack Applications. I've a good grasp of Data structures &
            Algorithms, I practicize on Leetcode(Solved 300+ problems). I am
            well versed with Computer Science fundamentals like OOPS, Operating
            Systems, Database Management Systems, Computer Networks and also
            have keen interest in System Design. I enjoy tackling every-day
            challenges by using technology, with an incessant thirst for
            knowledge. When presented with opportunities outside of my comfort
            zone, I take them in stride and strive to excel. I'm looking for
            internship/full-time role in full stack web development and software
            engineering domain.
          </p>
        </div>
        <a download href="/Shubham_Sonawane_Resume.pdf">
          Download Resume
        </a>
      </div>
      {/* //Skills */}
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS NPM, BootStrap, MaterialUI,
              Yarn, TailwindCSS.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS ExpressJS, REST API, ApolloServer, MySQL, MongoDB, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C, C++ ,TypeScript</span>
          </li>
        </ol>
      </div>

      {/* //contactme */}
      <div className="contact-section" id="contactme">
        <h2 className="contact-title">Contact Me</h2>
        <h4 className="contact-subtitle">Get In Touch</h4>
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact_information">
              <i className="uil uil-phone contact_icon"></i>
              <div>
                <h3 className="contact_title">Call Me</h3>
                <span className="contact_subtitle">8551804947</span>
              </div>
            </div>
            <div className="contact_information">
              <i className="uil uil-envelope contact_icon"></i>
              <div>
                <h3 className="contact_title">Email</h3>
                <span className="contact_subtitle">
                  shubhamsonawane1707@gmail.com
                </span>
              </div>
            </div>
            <div className="contact_information">
              <i className="uil uil-map-marker contact_icon"></i>
              <div>
                <h3 className="contact_title">Location</h3>
                <span className="contact_subtitle">Ch. Sambhajinagar</span>
              </div>
            </div>
          </div>
          <form
            action="https://getform.io/f/4a3704d9-8fe4-44ce-a5b0-1abb9757ac9a"
            className="contact-form"
            method="post"
          >
            <label className="contact_label">Name</label>
            <input type="text" name="name" className="contact_input" />

            <label className="contact_label">Email</label>
            <input type="email" name="email" className="contact_input" />

            <label className="contact_label">Message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              className="contact_content contact_input"
            ></textarea>

            <button type="submit" className="button">
             
              
              send
             
            </button>

          </form>
        </div>
      </div>

      {/* //Home end */}
    </div>
  );
}

export default Home;
