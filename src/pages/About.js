import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import Image from "../images/home.jpg";
import "../styles/Aboutstyle.css";
import index from "./index";
const About = () => {
  return (
    <Layoutmain>
      <div
        className="home"
        style={{
          backgroundImage: `url(${Image})`,
          height: "65vh",
          width: "195.5vh",
        }}
      >
        <div className="overlayabout">
          <p>CRAFTING YOUR DIGITAL DREAMS INTO DIGITAL REALITY.</p>
        </div>
      </div>
      {/* <div className="title-container">
        <p>Stay in touch with us</p>
      </div> */}
      <div className="about-contents">
        <div className="contents-image">
          <img
            src={index.aboutcontent}
            alt="Description of the image"
            style={{
              height: "110vh",
              width: "90vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "15px",
            }}
          />

          <div className="contents-container">
            <h2>About Us</h2>
            <h3>We are Creative Tech Enthusiast working since 2021.</h3>
            <p>
              DreamViewer is leading technology providing solutions according to
              uour business needs since 2021. We are here to provide touch notch
              solution for your website or web application that helps you to
              make your website look attractive designs & efficient in handling
              by creating useful plugins thats you need. We are a dynamic team
              of professionals dedicated to providing innovative solutions in
              the field of technology. Our company was founded in 2021, and
              since then, we have been working tirelessly to deliver exceptional
              services to our clients.
              <br /> Our team consists of highly skilled individuals with
              expertise in various areas of technology, including software
              development, web design, blockchain development, gaming and more.
              We take pride in our ability to stay up-to-date with the latest
              industry trends and advancements, allowing us to offer
              cutting-edge solutions that exceed our clients' expectations.
              <br /> Our commitment to quality and customer satisfaction is
              evident in everything we do. We believe that every project is
              unique and requires a personalized approach. That's why we work
              closely with our clients to understand their needs and tailor our
              solutions to meet their specific requirements.
              <br /> At our core, we value creativity, innovation, and
              collaboration. We believe that by working together and leveraging
              our diverse expertise, we can achieve extraordinary results. We
              look forward to working with you and helping you take your
              business to new heights.
              <br /> We are here to serve you next level quality that currently
              in trend to match you with your expertise.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutlast-content">
        <h2>Our Future Goal</h2>
        <h3>We want to lead in Innovation & Technology</h3>
        <p>
          ~ We work on UI/UX and functionality as well so that a plugins comes
          with proper stucture & stunning looks which suits to your web app &
          website.
          <br /> ~ We also work on blockchain technologies and gaming
          development with proper planning and functionalities.
          <br /> ~ We try our best level to give our clients the utmost
          satisfaction by providing our top notch services to them.
          <br /> ~ Here you can also share the content you create, if our
          technical team likes it, then we will also share it on our blog.
          <br /> ~ In the end, I would say keep visiting our website and enjoy
          the quality content.
        </p>
      </div>
    </Layoutmain>
  );
};

export default About;
