import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import index from "./index";
import "../styles/AichatbotStyle.css";
import Image from "../images/home.jpg";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const AiChatbot = () => {
  return (
    <Layoutmain>
      <div
        className="chatbothome"
        style={{
          backgroundImage: `url(${Image})`,
          height: "55vh",
          width: "195.5vh",
        }}
      >
        <div className="overlaychatbot">
          <p>AI/ML CHATBOT DEVELOPMENT</p>
        </div>
      </div>
      <div className="chatbot-contents">
        <div className="contentchatbot-image">
          <img
            src={index.Chatbot1}
            alt="Description of the image"
            style={{
              height: "70vh",
              width: "75vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "35px",
            }}
          />

          <div className="contents-containerchatbot">
            <h3 style={{ lineHeight: "55px" }}>
              Experience Seamless Customer Service with Our Cutting-Edge Chatbot
              Technology
            </h3>
          </div>
        </div>
      </div>
      <div className="contents-containerchatbotend">
        <h3 style={{ lineHeight: "55px" }}>
          Under Development Chatbot-BOAT To know more about Chatbot Services.
        </h3>
      </div>
      <div className="contents-containerchatbotend">
        <h3 style={{ lineHeight: "55px" }}>We are happy to help you.</h3>
        <div className="button-chatbot">
          <Link to="/Contactus">
            <button className="chatbot-button">Contact Us</button>
          </Link>
        </div>
      </div>
    </Layoutmain>
  );
};

export default AiChatbot;
