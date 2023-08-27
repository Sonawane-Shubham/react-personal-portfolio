import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { SiLeetcode, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  // const PVariants = {
  //   initial: { x: 2200 },
  //   animate: { x: 0 },
  //   transition: {
  //     duration: 1,
  //     delay: 0.3,
  //     type: "spring",
  //   },
  // };

  const PV = {
    hidden: { x: 2200 },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        type: "spring",
      },
    },
  };
  return (
    <div className="home">
      <div className="about">
        <motion.h2
          initial={{ y: 350 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
          }}
        >
          Hi, My Name is Shubham Sonawane
        </motion.h2>
        <div className="prompt">
          <motion.p
            variants={PV}
            initial="hidden"
            animate="visible"
            // initial={{ x: 2200 }}
            // animate={{ x: 0}}
            // transition={{
            //   duration: 1,
            //   delay: 0.3,
            //   type: "spring",
            // }}
          >
            A software developer with a passion for learning and creating.
          </motion.p>
          <Link
            to="https://github.com/Sonawane-Shubham"
            target="_blank
          "
          >
            <SiGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/shubham-sonawane-77b749192/"
            target="_blank
          "
          >
            <LinkedInIcon />
          </Link>

          <Link
            to="mailto:shubhamsonawane1707@gmail.com"
            target="_blank
          "
          >
            <EmailIcon />
          </Link>

          <Link
            href="https://leetcode.com/shubham_sonawane/"
            target="_blank
          "
          >
            <SiLeetcode />
          </Link>

          {/* <div className="resume-download">
            <p className="download-label"></p>
            <a
              download
              href="/Shubham_Sonawane_Resume.pdf"
              title="download resume"
            >
              <CloudDownload className="resume-download-link" />
           
            </a>
          </div> */}
        </div>
      </div>
      {/* //about me section */}
      <div className="aboutme" name="about" id="about">
        <motion.h2
          className="aboutme-heading"
          initial={{
            opacity: 0,
            scale: 0,
            y: 150,
          }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About me
        </motion.h2>

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
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0,
            y: 150,
          }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h1>
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
        <motion.h2
          className="contact-title"
          initial={{
            opacity: 0,
            scale: 0,
            y: 150,
          }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
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
