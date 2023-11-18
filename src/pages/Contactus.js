import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import "../styles/ContactStyle.css";
import Image from "../images/home.jpg";
import { Button } from "@mui/material";
const Contactus = () => {
  return (
    <Layoutmain>
      {/* <div className="heading">
        <h1>Stay in touch with us</h1>
        <p>Feel free to connect with us. We will be back to you shortly.</p>
      </div> */}
      <div
        className="home"
        style={{
          backgroundImage: `url(${Image})`,
          height: "80vh",
          width: "195.5vh",
        }}
      >
        <div className="overlaycontact">
          <h1>Get a Quote</h1>
          <h2>We are here to serve you best services.</h2>
          <h3>You still have queries?</h3>
        </div>
      </div>
      <div className="title-container">
        <p>Stay in touch with us</p>
      </div>

      <p className="title-container2">
        Feel free to connect with us. We will be back to you shortly.
      </p>
      <div className="container">
        <div className="section1">
          <h2>Contact Us</h2>
          <p>
            <h5>
              As you might expect of a company that began as a high-end solution
              to all <br /> your business needs, we pay strict attention.
            </h5>
          </p>
          <p>
            <strong>Delhi, Noida</strong>
            <br />
            <h5>
              H-150, Sector 63, Delhi,
              <br />
              Noida, Uttar Pradesh - 201301 India
            </h5>
          </p>
          <p>
            <strong>Call Us</strong>
            <br />
            <h5>
              +918860464098, +919599484325
              <br />
              +919511229801, +919142050882
            </h5>
          </p>
          <p>
            <strong>Email Us</strong>
            <br />
            <h5>infotechdreamviewer@gmail.com</h5>
          </p>
          <p>
            <strong>Open Hours</strong>
            <br />
            <h5>
              Monday - Saturday
              <br />
              9:00AM - 07:00PM
            </h5>
          </p>
        </div>
        <form>
          <div className="section2">
            <input type="text" placeholder="Name" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <input type="text" placeholder="Subject" />
            <br />
            <input type="text" placeholder="phone" />
            <br />
            <textarea placeholder="Message"></textarea>
            <br />
            <button>Submit</button>
          </div>
        </form>
      </div>
    </Layoutmain>
  );
};

export default Contactus;
