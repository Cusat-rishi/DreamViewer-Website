import React, { useState } from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import index from "./index";
import "../styles/JobopeningStyle.css";
import Image from "../images/home.jpg";
import { Link } from "react-router-dom";

const Jobsopenings = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFile(files[0]);
  };
  return (
    <Layoutmain>
      <div
        className="jobshome"
        style={{
          backgroundImage: `url(${Image})`,
          height: "55vh",
          width: "195.5vh",
        }}
      >
        <div className="overlayjobs">
          <p>CAREERS/JOB OPENINGS</p>
        </div>
      </div>
      <div className="jobs-contents">
        <div className="contentjobs-image">
          <img
            src={index.jobsimage}
            alt="Description of the image"
            style={{
              height: "70vh",
              width: "75vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "35px",
            }}
          />
          <div className="contents-containerjobs">
            <h3 style={{ lineHeight: "45px" }}>
              Careers openings in DreamViewer Infotech
            </h3>
          </div>
        </div>
      </div>
      <form className="jobsform">
        <div className="sectionjobs">
          <input type="text" placeholder="Enter your name" />
          <br />
          <input type="text" placeholder="Enter your email address" />
          <br />
          <input type="text" placeholder="Address" />
          <br />
          <input type="text" placeholder="Telephone/Mobile" />
          <br />
          <div>
            <input type="file" onChange={handleFileChange} />
            <p>Select your CV: {selectedFile ? selectedFile.name : "None"}</p>
          </div>
          <br />
          <button>Submit</button>
        </div>
      </form>
    </Layoutmain>
  );
};

export default Jobsopenings;
