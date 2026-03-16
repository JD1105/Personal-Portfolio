import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        <div className="project">
          <a
            href="https://able-hire.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="AbleHire" width="100%" />
          </a>

          <a
            href="https://able-hire.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>AbleHire</h2>
          </a>

          <p>
            A hiring platform designed to help individuals with disabilities
            find jobs based on their skills. The platform includes job postings,
            AI-powered career guidance chatbot, course recommendations, and
            voice-enabled job search for better accessibility.
          </p>
        </div>

        <div className="project">
          <img src={mock05} className="zoom" alt="TripTogether" width="100%" />

          <h2>TripTogether</h2>

          <p>
            A real-time location sharing Android application for group travel.
            Users can create a ride, share a ride ID, and track members on a map
            using Google Maps API. The app also includes an SOS emergency
            feature for safer journeys.
          </p>
        </div>

        <div className="project">
          <img src={mock04} className="zoom" alt="SmileGenie" width="100%" />

          <h2>SmileGenie</h2>

          <p>
            A mood enhancing Android application that detects facial expressions
            using a CNN-based machine learning model. Based on the detected
            emotions, the system provides personalized recommendations to
            improve the user's mood.
          </p>
        </div>

        <div className="project">
          <img src={mock03} className="zoom" alt="TuPil" width="100%" />

          <h2>TuPil – Tutor Platform</h2>

          <p>
            A web application that connects students with tutors for different
            subjects. The platform allows students to explore tutors while
            administrators can manage tutor listings through a streamlined
            interface.
          </p>
        </div>

        <div className="project">
          <img src={mock01} className="zoom" alt="ML Testing" width="100%" />

          <h2>Machine Learning Application Testing</h2>

          <p>
            Implemented automated testing for machine learning models using
            Python and Pytest. Designed test cases to validate prediction
            accuracy, endpoint functionality, and model integration within
            Flask-based applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
