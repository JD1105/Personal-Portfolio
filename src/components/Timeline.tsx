import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Nov 2022 - Present"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AAC Club Member</h3>
            <h4 className="vertical-timeline-element-subtitle">
              GRIET, Hyderabad
            </h4>
            <p>
              Developed a machine learning application to detect facial
              expressions and analyze user emotions. The system provides
              personalized recommendations to improve users' mood using computer
              vision techniques.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024 - Jul 2024"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Unified Mentor
            </h4>
            <p>
              Collaborated with a team to build a dynamic website using React,
              Node.js, and Firebase. Designed a responsive user interface and
              implemented backend functionalities to enhance accessibility and
              system performance.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineering Virtual Experience
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              JPMorgan Chase & Co.
            </h4>
            <p>
              Completed a simulation focused on solving engineering tickets for
              a credit-card rewards system. Developed a new test class and
              implemented a test suite to ensure system stability and
              functionality.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2024 - Jan 2025"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Freelance Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Self Employed
            </h4>
            <p>
              Developed and deployed web applications using Flask. Integrated
              machine learning models to provide real-time predictions and
              ensured application performance and reliability in production.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
