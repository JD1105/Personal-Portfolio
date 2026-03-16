import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faAndroid,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "Node.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Firebase",
  "Flask",
  "MongoDB",
  "SQL",
];

const labelsSecond = [
  "Kotlin",
  "Java",
  "Android Development",
  "Google Maps API",
  "Firebase",
  "XML",
];

const labelsThird = [
  "Python",
  "Machine Learning",
  "CNN",
  "Pytest",
  "TensorFlow",
  "Data Analysis",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p style={{ textAlign: "justify" }}>
              I develop modern full stack web applications using React, Node.js,
              Firebase and Flask. I have experience building scalable platforms
              . My focus is on building responsive interfaces, efficient backend
              services, and seamless user experiences.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAndroid} size="3x" />
            <h3>Android & Mobile Development</h3>
            <p style={{ textAlign: "justify" }}>
              I build Android applications using Kotlin and Java. My projects
              include real-time navigation and location-sharing apps like
              TripTogether, integrating Google Maps API and Firebase for
              seamless connectivity and real-time data synchronization.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Machine Learning & AI</h3>
            <p style={{ textAlign: "justify" }}>
              I work on machine learning applications involving computer vision
              and intelligent systems. I built SmileGenie, a CNN-based facial
              expression detection app, and implemented automated testing for ML
              models using Python and Pytest.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
