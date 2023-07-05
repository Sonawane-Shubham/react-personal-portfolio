import React from "react";
// import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  // const navigate = useNavigate();
  return (
    <div className="projectItem">
      <div
        // onClick={() => {
        //   navigate("/project/" + id);
        // }}
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      />
      <h1> {name} </h1>
      <p>
        <strong>Description :</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores
        necessitatibus at qui aut cupiditate, dolorem ut fugit ratione odit
        officiis ab ducimus unde modi nemo eos quis? Autem, quod.
      </p>
      <p>
        <strong>Tech Stack :</strong> Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Quod, deleniti!
      </p>
      <a href="http://">
        <button>View</button>
      </a>
      <a href="http://">
        <button>Github</button>
      </a>
    </div>
  );
}

export default ProjectItem;
