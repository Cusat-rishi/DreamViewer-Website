import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import index from "./index";
import "../styles/ErpStyle.css";
import Image from "../images/home.jpg";
const ErpSoftware = () => {
  return (
    <Layoutmain>
      <div
        className="ERPhome"
        style={{
          backgroundImage: `url(${Image})`,
          height: "55vh",
          width: "195.5vh",
        }}
      >
        <div className="overlayERP">
          <p>ERP SOFTWARE SERVICES</p>
        </div>
      </div>
      {/* <div className="title-container">
        <p>Stay in touch with us</p>
      </div> */}
      <div className="ERP-contents">
        <div className="contentsERP-image">
          <img
            src={index.ErpImage1}
            alt="Description of the image"
            style={{
              height: "60vh",
              width: "80vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "35px",
            }}
          />

          <div className="contents-containerERP" style={{ marginTop: "45px" }}>
            <h3 style={{ lineHeight: "45px" }}>
              Streamline Your Business Operations with our Comprehensive ERP
              Solutions
            </h3>
            {/* <h3>We are Creative Tech Enthusiast working since 2021.</h3> */}
            <p>
              Our ERP (Enterprise Resource Planning) services provide
              comprehensive solutions for businesses looking to streamline their
              operations and improve efficiency. We have a team of experienced
              consultants who work closely with clients to select the right ERP
              system and customize it to their unique business needs. Our focus
              on customer service means that we are committed to building strong
              relationships with our clients and helping them achieve their
              business objectives.
            </p>
          </div>
        </div>
      </div>
      <div className="ERP-contents">
        <div className="contentsERP-image">
          <img
            src={index.ErpImage2}
            alt="Description of the image"
            style={{
              height: "60vh",
              width: "80vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "35px",
              marginBottom: "30px",
            }}
          />

          <div className="contents-containerERP">
            <h3 style={{ lineHeight: "45px" }}>ERP- Tax Services</h3>
            <p>
              A tax services app is a mobile application designed to help
              individuals and businesses manage their tax-related tasks and
              obligations. The app typically provides features such as tax
              calculators, tax filing assistance, and tax payment options. One
              of the key features of a tax services app is the ability to
              prepare and file tax returns. Users can input their income,
              expenses, and other relevant information, and the app will
              calculate the amount of taxes owed or the refund due. The app can
              then generate the necessary forms and schedules, and users can
              file their taxes directly from the app.
              <br /> Another important feature of a tax services app is the
              ability to provide tax advice and guidance. Users can ask
              questions about specific tax situations, such as deductions or
              credits, and the app can provide answers and suggestions.
              Additionally, the app can provide notifications and reminders
              about important tax deadlines and changes to tax laws. The tax
              services app may also offer additional features such as budgeting
              tools, expense tracking, and financial planning advice. This can
              help users better manage their finances and make informed
              decisions about their taxes and other financial matters. Overall,
              a tax services app can provide a convenient and efficient way for
              individuals and businesses to manage their tax obligations and
              stay on top of their finances.
            </p>
          </div>
        </div>
      </div>
    </Layoutmain>
  );
};

export default ErpSoftware;
