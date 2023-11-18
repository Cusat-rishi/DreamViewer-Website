import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import "../styles/WebAppStyle.css";
import Image from "../images/home.jpg";
import index from "./index";
const WebApp = () => {
  const boxcontent = [
    {
      id: 1,
      content:
        "We have a team of highly skilled and experienced developers who have a deep understanding of the latest technologies and trends in web development. This enables us to provide innovative and customized solutions that meet your unique business requirements.",
    },
    {
      id: 2,
      content:
        "We follow a collaborative approach to project development, where we work closely with our clients to understand their needs and expectations. We believe that clear communication and transparency are key to a successful project, and we keep our clients informed at every step of the development process.",
    },
    {
      id: 3,
      content:
        "We are committed to delivering projects on time and within budget. We use agile development methodologies to ensure that our projects are completed efficiently and to the highest quality standards. We also provide ongoing support and maintenance services to ensure that your website or application continues to perform at its best.",
    },
  ];

  return (
    <Layoutmain>
      <div
        className="webhome"
        style={{
          backgroundImage: `url(${Image})`,
          height: "55vh",
          width: "195.5vh",
        }}
      >
        <div className="overlayweb">
          <p>WEB DEVELOPMENT SERVICES</p>
        </div>
      </div>
      {/* <div className="title-container">
        <p>Stay in touch with us</p>
      </div> */}
      <div className="web-contents">
        <div className="contentsweb-image">
          <img
            src={index.webapp1}
            alt="Description of the image"
            style={{
              height: "60vh",
              width: "80vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "35px",
            }}
          />

          <div className="contents-containerweb" style={{ marginTop: "45px" }}>
            <h3 style={{ lineHeight: "45px" }}>
              Revolutionize your online presence with cutting-edge web
              development strategies!
            </h3>
            {/* <h3>We are Creative Tech Enthusiast working since 2021.</h3> */}
            <p>
              The importance of having a strong online presence through web
              development is necessary.The businesses and individuals need to
              stay up-to-date with the latest strategies in order to attract and
              engage users. By implementing cutting-edge techniques, businesses
              can improve user experience and increase conversions. If you want
              to make an impact in the online world, it's time to revolutionize
              your approach to web development.
            </p>
          </div>
        </div>
      </div>
      <div className="web-contents">
        <div className="contentsweb-image">
          <img
            src={index.webapp2}
            alt="Description of the image"
            style={{
              height: "60vh",
              width: "80vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "55px",
              marginBottom: "30px",
            }}
          />

          <div className="contents-containerweb">
            <h3 style={{ lineHeight: "45px" }}>
              Shop Online with Ease: Discover Our Extensive Range of Products on
              Our Ecommerce Website.
            </h3>
            <p>
              An ecommerce website is an online platform that allows businesses
              to sell products or services to customers over the internet. These
              websites provide an easy and convenient way for consumers to shop
              and make purchases without having to visit a physical store.
              Typically, ecommerce websites include features such as a product
              catalog, shopping cart, payment gateway, and order management
              system. They also often include marketing and promotional tools,
              such as email marketing and social media integration, to help
              businesses reach and engage with potential customers. In addition,
              many ecommerce websites offer customer support features, such as a
              FAQ section, live chat, and customer reviews, to help customers
              make informed purchasing decisions and resolve any issues they may
              encounter. Overall, ecommerce websites have become an essential
              tool for businesses of all sizes to reach a global customer base
              and increase their sales revenue.
            </p>
          </div>
        </div>
      </div>
      <div className="web-contents">
        <div className="contentsweb-image">
          <img
            src={index.webapp3}
            alt="Description of the image"
            style={{
              height: "60vh",
              width: "80vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginBottom: "60px",
            }}
          />
          <div className="contents-containerweb">
            <h3 style={{ lineHeight: "45px" }}>
              Our Development Team Experiences
            </h3>
            <p>
              Our company is proud to offer top-notch development services to
              clients in various industries. Our team of experienced developers
              is dedicated to providing high-quality solutions that meet our
              clients' specific needs and requirements. Whether it's developing
              a custom web application, creating a mobile app, or building an
              e-commerce platform, we have the expertise and resources to
              deliver exceptional results. We use the latest technologies and
              best practices to ensure that our clients' projects are delivered
              on time and within budget. Our goal is to help our clients achieve
              their business objectives and succeed in the competitive digital
              landscape.
            </p>
          </div>
        </div>
      </div>
      <div className="web-contents2">
        <div className="contents-containerweb2">
          <h3 style={{ lineHeight: "45px", fontSize: "36px" }}>
            Why choose us for Application Services?
          </h3>
          <p
            style={{
              lineHeight: "25px",
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "40px",
              marginTop: "20px",
            }}
          >
            At <i>DreamViewer Infotech</i>, We have a proven track record of
            delivering high-quality and innovative applications. The following
            are some reasons why you might choose our company for web
            development services:
          </p>
        </div>
      </div>
      <div className="languagecontainer" style={{}}>
        {boxcontent.map((box) => (
          <div key={box.id} className="boxweb">
            <p>{box.content}</p>
          </div>
        ))}
      </div>
    </Layoutmain>
  );
};

export default WebApp;
