import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
// import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="project-item">
        <div className="project-item-img">
          <img src={project.image} alt="result"/>
          <div>
            <a href="http://">
              <button>View</button>
            </a>
            <a href="http://">
              <button>Github</button>
            </a>
          </div>
        </div>
        <div className="item-description">
          <p>
            <b>Skills:</b> {project.skills}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            expedita dolorem consequatur laborum architecto maiores natus magni
            placeat. Excepturi consequuntur quia corporis nulla cum consectetur
            expedita cupiditate sapiente amet quaerat!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
