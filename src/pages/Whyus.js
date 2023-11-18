import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import index from "./index";
import "../styles/whyusStyle.css";
import Image from "../images/home.jpg";

const Whyus = () => {
  return (
    <Layoutmain>
      <div
        className="whyushome"
        style={{
          backgroundImage: `url(${Image})`,
          height: "65vh",
          width: "195.5vh",
        }}
      >
        <div className="overlaywhyus">
          <p>WHY TO JOIN US?</p>
        </div>
      </div>
      <div className="whyus-contents">
        <div className="contentwhyus-image">
          <img
            src={index.whyusimage}
            alt="Description of the image"
            style={{
              height: "55vh",
              width: "75vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "35px",
            }}
          />
          <div className="contents-containerwhyus">
            <h3 style={{ lineHeight: "45px" }}>Careers / Why To join us?</h3>
          </div>
        </div>
      </div>
      <div className="whyus-container">
        <h3>Why Join Us?</h3>
        <p>
          Welcome to DreamViewer Infotech, where innovation and technology are
          at the forefront of everything we do. If you're looking for a dynamic
          and challenging workplace that values creativity, collaboration, and
          personal growth, then we are the perfect fit for you.
        </p>
      </div>
      {/* // box elements */}
      <div className="whyusboxelements-container">
        <div className="whyus-box1">
          <h3>Unleash your creativity</h3>
          <p>
            Our projects are anything but ordinary. We're constantly working on
            new and exciting projects that require out-of-the-box thinking and
            innovative solutions. You'll have the opportunity to unleash your
            creativity and make a real impact on the world.
          </p>
        </div>
        <div className="whyus-box2">
          <h3>Collaborate with the best</h3>
          <p>
            Our team is made up of some of the best and brightest minds in the
            industry. You'll have the opportunity to collaborate with talented
            individuals who are just as passionate about technology as you are.
          </p>
        </div>
      </div>
      <div className="whyusboxelements-container">
        <div className="whyus-box3">
          <h3>Develop your skills</h3>
          <p>
            We believe in investing in our employees' growth and development.
            You'll have access to training and mentorship programs that will
            help you develop your skills and advance your career.
          </p>
        </div>
        <div className="whyus-box4">
          <h3>Work on meaningful projects</h3>
          <p>
            Our projects aren't just about making money - they're about making a
            difference. You'll have the opportunity to work on projects that
            have a real impact on people's lives and the world around us.
          </p>
        </div>
        <div className="whyus-box5">
          <h3>Embrace diversity and inclusivity</h3>
          <p>
            We believe that diversity of thought, experience, and background is
            essential to driving innovation and success. We're committed to
            creating a workplace that is inclusive and welcoming to everyone.
          </p>
        </div>
      </div>
    </Layoutmain>
  );
};

export default Whyus;
