import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <div className="resume__container">
        <h4>
          Download my{" "}
          <a
            href="https://shriresume.com/sample-confidence-and-strength-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            resume
          </a>
        </h4>
        <div className="resume__items">
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="resume__items">
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
