import React from "react";
import "./Project.css";

const Project = ({ img, title, subject, link }) => {
  return (
    <div className="project">
      <img src={img} alt="project" />
      <div className="project__details">
        <a href={link} rel="noreferrer" target="_blank">
          <h3>{title}</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
          />
        </a>
        <h5>{subject}</h5>
      </div>
    </div>
  );
};

export default Project;
