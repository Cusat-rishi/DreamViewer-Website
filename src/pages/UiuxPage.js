import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import "../styles/UiuxStyle.css";
import Image from "../images/home.jpg";
import index from "./index";
const UiuxPage = () => {
  return (
    <Layoutmain>
      <div
        className="uihome"
        style={{
          backgroundImage: `url(${Image})`,
          height: "55vh",
          width: "195.5vh",
        }}
      >
        <div className="overlayuiux">
          <p>UI/UX DESIGN</p>
        </div>
      </div>
      {/* <div className="title-container">
        <p>Stay in touch with us</p>
      </div> */}
      <div className="uiux-contents">
        <div className="contentsui-image">
          <img
            src={index.UXimage1}
            alt="Description of the image"
            style={{
              height: "50vh",
              width: "80vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "25px",
            }}
          />

          <div className="contents-containerui">
            <h3 style={{ lineHeight: "45px" }}>
              Understanding the Importance of UX/UI in Designing a Successful
              Product
            </h3>
            {/* <h3>We are Creative Tech Enthusiast working since 2021.</h3> */}
            <p>
              At our company, we specialize in providing top-notch UX/UI design
              services to help businesses create successful products. <br />
              We understand the importance of a great user experience and how it
              can make all the difference in the success of a product. Our team
              of skilled designers has years of experience creating intuitive,
              engaging, and visually appealing designs that resonate with users.
            </p>
          </div>
        </div>
      </div>
      <div className="uiux-contents">
        <div className="contentsui-image">
          <img
            src={index.UXimage2}
            alt="Description of the image"
            style={{
              height: "55vh",
              width: "80vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "15px",
              marginBottom: "30px",
            }}
          />

          <div className="contents-containerui">
            <h3 style={{ lineHeight: "45px" }}>
              UX/UI-Wireframing and Prototyping
            </h3>
            <p>
              UX/UI refers to the design of a digital product or service with
              the user experience (UX) and user interface (UI) in mind. UX
              design focuses on understanding the needs and behaviors of users
              and creating products that are intuitive, efficient, and enjoyable
              to use. UI design, on the other hand, involves creating a visually
              appealing interface that allows users to interact with the product
              or service seamlessly. Both UX and UI design play a critical role
              in creating successful products, as they ensure that users can
              easily navigate and interact with the product, resulting in a
              positive user experience.
            </p>
          </div>
        </div>
      </div>
    </Layoutmain>
  );
};

export default UiuxPage;
