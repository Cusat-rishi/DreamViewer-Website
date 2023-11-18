import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import { Link } from "react-router-dom";
import Image from "../images/home.jpg";
import "../styles/Homestyle.css";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { Avatar } from "@mui/material";

import index from "./index";

import {
  School,
  LocalHospital,
  Webhook,
  LocalGroceryStore,
  Style,
  Domain,
  SmartToy,
  PrecisionManufacturing,
} from "@mui/icons-material";
// Main start from here...........

const Home = () => {
  // const boxes = Array.from({ length: 4 }, (_, index) => index + 1);

  const googleDriveLink =
    "https://drive.google.com/file/d/1fp7qeKjxLvnrgkngc3LFKOJ0yJJfSDcm/view?usp=sharing";

  const boxes = [
    {
      id: 1,
      title: "HTML",
      content:
        "HTML (Hypertext Markup Language) is a markup language used for creating web pages and other information that can be displayed in a web browser.",
    },
    {
      id: 2,
      title: "CSS",
      content:
        "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation and layout of an attractive web pages.",
    },
    {
      id: 3,
      title: "JAVA SCRIPT",
      content:
        "JavaScript is a high-level, interpreted programming language used to create interactive and dynamic websites.",
    },
    {
      id: 4,
      title: "BOOTSTRAP",
      content:
        "Bootstrap is a most popular front-end framework of CSS for building responsive and attractive mobile-first websites.",
    },
  ];
  const boxes2 = [
    {
      id: 1,
      title: "REACT JS",
      content:
        "React is a JavaScript-based UI development library. it is widely used in web development to build user interfaces",
    },
    {
      id: 2,
      title: "FLUTTER",
      content:
        "Flutter is an open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    },
    {
      id: 3,
      title: "REACT NATIVE",
      content:
        "React Native is a cross-platform framework for building mobile applications using JavaScript and React.",
    },
    {
      id: 4,
      title: "NODE JS",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server-side.",
    },
  ];

  const boxes3 = [
    {
      id: 1,
      title: "PHP",
      content:
        "PHP is a popular server-side scripting language used for web development.",
    },
    {
      id: 2,
      title: "LARAVEL",
      content:
        "Laravel is a free, open-source PHP web application framework used for web development.",
    },
    {
      id: 3,
      title: "PYTHON",
      content:
        "Python is a high-level, interpreted programming language used for general-purpose programming, web, data analysis, and AI.",
    },
    {
      id: 4,
      title: "MONGO DB",
      content:
        "MongoDB is a document-oriented NoSQL database system that uses a JSON-like format to store data.",
    },
  ];

  const ourservices = [
    {
      id: 1,
      title: "UX/UI Design",
      content:
        "We understand the importance of user experience (UX) and user interface (UI) design in creating digital products that engage, delight, and convert users. Our UX/UI design services are tailored to your specific needs and objectives, and aim to deliver intuitive, visually appealing, and user-centered designs that drive business growth. Read More",
    },
    {
      id: 2,
      title: "Web Development",
      content:
        "We offer comprehensive web development services to help businesses establish a strong online presence. From website design to e-commerce solutions and content management systems, we provide end-to-end web development services to help our clients achieve their business objectives. Read More",
    },
    {
      id: 3,
      title: "Blockchain Development",
      content:
        "We provide cutting-edge blockchain services to help businesses harness the power of this transformative technology. Our team of blockchain experts has the skills and experience needed to develop, implement, and manage blockchain solutions tailored to the specific needs of our clients. Read More ",
    },
  ];

  const ourservices2 = [
    {
      id: 1,
      title: "Game Development",
      content:
        "Our company specializes in game development, creating immersive and engaging games for players of all ages.We use cutting-edge technology to bring our clients' ideas to life and deliver high-quality games that provide hours of entertainment. Read More",
    },
    {
      id: 2,
      title: "App Development",
      content:
        "We offer comprehensive app development services that help businesses create engaging and user-friendly mobile applications. We provide end-to-end app development services that ensure high-quality, robust, and scalable mobile applications. Read More",
    },
    {
      id: 3,
      title: "AI/ML and chatbots",
      content:
        "AI-powered chatbots utilize machine learning and natural language processing to provide personalized and efficient customer service, resulting in increased customer satisfaction and business growth. Read More",
    },
  ];

  const handleButtonClick = (boxId) => {
    // You can use the boxId to perform any action, such as navigating to a specific page
    const buttonLink = buttonLinks.find((button) => button.id === boxId);

    // Perform any action with the button link, such as navigating to a specific page
    if (buttonLink) {
      console.log(
        `Button clicked for Box ${boxId}. Navigating to: ${buttonLink.link}`
      );
      // You can use a navigation library or window.location.href to navigate
    }
  };
  const buttonLinks = [
    { id: 1, link: "/learn-more" },
    { id: 2, link: "/explore" },
    { id: 3, link: "/addlink" },
    // Add more button links as needed
  ];
  const buttonLinks2 = [
    { id: 1, link: "/learn-more" },
    { id: 2, link: "/explore" },
    { id: 3, link: "/addlink" },
    // Add more button links as needed
  ];
  const buttonLinks3 = [
    { id: 1, link: "/Blogs" },
    { id: 2, link: "/Blogs" },
    { id: 3, link: "/Blogs" },
    // Add more button links as needed
  ];
  const handleButtonClick2 = (boxId) => {
    // You can use the boxId to perform any action, such as navigating to a specific page
    const buttonLink = buttonLinks.find((button) => button.id === boxId);

    // Perform any action with the button link, such as navigating to a specific page
    if (buttonLink) {
      console.log(
        `Button clicked for Box ${boxId}. Navigating to: ${buttonLink.link}`
      );
      // You can use a navigation library or window.location.href to navigate
    }
  };

  const industry = [
    {
      id: 1,
      Icon: <School />,
      title: "Education",
      // content: "Education",
    },
    {
      id: 2,
      Icon: <LocalHospital />,
      title: "Healthcare",
      // content: "Healthcare",
    },
    {
      id: 3,
      Icon: <Webhook />,
      title: "ERP",
      // content: "ERP",
    },
    {
      id: 4,
      Icon: <LocalGroceryStore />,
      title: "Grocery Delivery",
      // content: "Grocery Delivery",
    },
  ];

  const industry2 = [
    {
      id: 1,
      Icon: <Style />,
      title: "LifeStyle",
      // content: "Education",
    },
    {
      id: 2,
      Icon: <Domain />,
      title: "RealState",
      // content: "Healthcare",
    },
    {
      id: 3,
      Icon: <SmartToy />,
      title: "Blockchain",
      // content: "ERP",
    },
    {
      id: 4,
      Icon: <PrecisionManufacturing />,
      title: "AI/ML",
      // content: "Grocery Delivery",
    },
  ];

  const portfolio = [
    {
      id: 1,
      image: `${index.portfolio1}`,
      title: "Bricks-The Gaming App",
      content:
        "Bricks is a gaming app that is designed for Lego enthusiasts of all ages. With its intuitive interface and engaging gameplay, Bricks offers a unique and immersive experience that allows players to create, design, and share their own Lego models.",
    },
    {
      id: 2,
      image: `${index.portfolio2}`,
      title: "Just Afghans-Dating App",
      content:
        "A dating app is a platform designed to connect people with similar interests and goals, facilitating the search for romantic partners or friendships.By providing features such as profile creation, swiping and matching, chat and messaging, and personalized recommendations, dating apps can help users find meaningful connections in a convenient and fun way.",
    },
    {
      id: 3,
      image: `${index.portfolio3}`,
      title: "Blockchain",
      content:
        "A trading app built with blockchain is a mobile application that enables users to buy, sell,and trade various assets, including cryptocurrencies, tokens, and other digital assets, using blockchain technology.",
    },
    {
      id: 4,
      image: `${index.portfolio4}`,
      title: "livehealthify",
      content:
        "livehealthify is afitness app that offers personalized diet plans, workout routines, and calorie tracking features. With its user-friendly interface and expert guidance, HealthifyMe makes it easy for users to achieve their health and fitness goals.",
    },
  ];
  const blogsblock = [
    {
      id: 1,
      date: "April 15, 2023",
      image: `${index.blogs1}`,
      title: "The Importance of Custom Development for Your Business.",
      content:
        "In today’s fast-paced digital world, having a strong online presence is essential for the businesses of all sizes. Whether you are a startup or an established enterprise, investing in custom development can help you stand out from the competition and achieve your business goals. At DreamViewer Infotech, we specialize in web, software, and game development that is tailored to the unique needs of all of our clients.",
    },
    {
      id: 2,
      date: "April 10, 2023",
      image: `${index.blogs2}`,
      title:
        "Revolutionizing Trust: The Strength and Promise of Blockchain Technology.",
      content:
        "Blockchain is essentially a technology that allows for permanent record-keeping of transactions. In other terms, blockchain technology can be defined as a system that cryptographically secures chains in a sequential manner. Additionally, it eliminates middlemen and builds confidence using an algorithm. At DreamViewer Infotech, we specialize in web, software, and game development that is tailored to the unique needs of our clients.",
    },
    {
      id: 3,
      date: "March 28, 2023",
      image: `${index.blogs3}`,
      title:
        "Unleash Your Online Presence with Our Top Notch Web Services - DreamViewer Made Easy!",
      content:
        "Are you looking for a reliable and experienced company to handle your website, software, & game development needs? Look no further than DreamViewer Infotech! At DreamViewer Infotech, we specialize in providing top-notch web services that cater to the needs of individuals & businesses alike. We have a team of skilled developers who are experts in website and software development.",
    },
  ];
  const clientblock = [
    {
      id: 1,
      name: "Gaurav (USA)",
      content:
        "I am so impressed with the work that DreamViewer Infotech Company did for me. Their team was responsive, professional, and knowledgeable. They went above and beyond to deliver the results that exceeded my expectations and my requirements. I would like to highly recommend them to anyone in need of their services...",
    },
    {
      id: 2,
      name: "Ravi",
      content:
        "I recently worked with DreamViewer Infotech Company & was blown away by their level of expertise & professionalism. Their team was incredibly responsive and attentive, and they cared about delivering exceptional results. I would highly recommend them to anyone looking for top-notch service and support.",
    },
    {
      id: 3,
      name: "Sanjeevani Gondane",
      content:
        "I cannot recommend DreamViewer Company highly enough! Their team is incredibly knowledgeable, responsive, and dedicated to providing outstanding service. I was thoroughly impressed with their professionalism and the quality of their work. Thank you, DreamViewer Infotech Company!",
    },
    {
      id: 4,
      name: "Himmat Singh",
      content:
        "I recently had the pleasure of working with DreamViewer Infotech Company, & I have to say, they exceeded my expectations in all way possible. From beg to end, Team was incredibly knowledgeable, and attentive to my needs. They were able to provide creative solutions to problems I didn't even know existed.",
    },
  ];
  return (
    <Layoutmain>
      <div
        className="home"
        // style={{
        //   backgroundImage: `url(${Image})`,
        //   height: "70vh",
        //   width: "195.5vh",
        // }}
      >
        <div className="overlay">
          <h1>BETTER SOLUTIONS FOR YOUR BUSINESS NEEDS</h1>
          <p>
            We offer customized and innovative solutions to help businesses
            achieve their goals. Our team of experts work closely with clients
            to understand their unique needs and develop tailored strategies
            that deliver results. With a focus on quality, efficiency, and
            excellence, we are dedicated to helping businesses succeed.
          </p>
          <Link to={googleDriveLink}>
            <button href={googleDriveLink} className="pdfcontainer">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
      {/* ......................... */}

      <h3 className="technologycontainer">Technologies we work on</h3>
      <div className="languagecontainer">
        {boxes.map((box) => (
          <div key={box.id} className="box">
            <h3>{box.title}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
      <div className="languagecontainer">
        {boxes2.map((box) => (
          <div key={box} className="box">
            <h3>{box.title}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
      <div className="languagecontainer">
        {boxes3.map((box) => (
          <div key={box} className="box">
            <h3>{box.title}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>

      {/* ............................ */}
      <h3 className="technologycontainer">Our Services</h3>
      <div className="servicescontainer">
        {ourservices.map((box) => (
          <div key={box} className="box2">
            <h3>{box.title}</h3>
            <p>{box.content}</p>
            {/* Additional button and link */}
            {buttonLinks.map(
              (button) =>
                button.id === box.id && (
                  <div key={button.id}>
                    <button
                      className="box-button"
                      onClick={() => handleButtonClick(box.id)}
                    >
                      {button.buttonText}
                    </button>
                    <Link to={button.link} className="box-link">
                      <p>READ MORE ~</p>
                    </Link>
                  </div>
                )
            )}
          </div>
        ))}
      </div>

      <div className="servicescontainer">
        {ourservices2.map((box) => (
          <div key={box} className="box2">
            <h3>{box.title}</h3>
            <p>{box.content}</p>
            {/* Additional button and link */}
            {buttonLinks2.map(
              (button) =>
                button.id === box.id && (
                  <div key={button.id}>
                    <button
                      className="box-button"
                      onClick={() => handleButtonClick2(box.id)}
                    >
                      {button.buttonText}
                    </button>
                    <Link to={button.link} className="box-link">
                      <p>READ MORE ~</p>
                    </Link>
                  </div>
                )
            )}
          </div>
        ))}
      </div>

      {/* ............................ */}
      <h3 className="technologycontainer">Industries we serve</h3>
      <div className="languagecontainer">
        {industry.map((box) => (
          <div key={box.id} className="pentagon-box">
            <Avatar>{box.Icon}</Avatar>
            <h3>{box.title}</h3>
            {/* <p>{box.content}</p> */}
          </div>
        ))}
      </div>

      <div className="languagecontainer">
        {industry2.map((box) => (
          <div key={box.id} className="pentagon-box">
            <Avatar>{box.Icon}</Avatar>
            <h3>{box.title}</h3>
            {/* <p>{box.content}</p> */}
          </div>
        ))}
      </div>

      {/* portfolio section................................ */}
      <h3 className="technologycontainer">We are Proud of our Portfolio</h3>

      <div className="languagecontainer">
        {portfolio.map((box) => (
          <div key={box.id} className="portfolio-box">
            <img src={box.image} alt={box.title} className="portfolio-image" />
            <h3>{box.title}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>

      <Link to="/Portfolio" className="buttonmain-container">
        <button className="button-portfolio">View All ~</button>
      </Link>

      {/* blogs section....................... */}
      <h3
        className="technologycontainer"
        style={{ marginTop: "45px", marginBottom: "45px" }}
      >
        Our Recent Blogs
      </h3>
      <div className="languagecontainer">
        {blogsblock.map((box) => (
          <div key={box.id} className="blogscontent-box">
            <img src={box.image} alt={box.title} className="blogs-image" />
            <h3 style={{ fontWeight: "400" }}>{box.date}</h3>
            <h3>{box.title}</h3>
            <p>{box.content}</p>
            {/* Additional button and link */}
            {buttonLinks3.map(
              (button) =>
                button.id === box.id && (
                  <div key={button.id}>
                    <button
                      className="box-button"
                      onClick={() => handleButtonClick(box.id)}
                    >
                      {button.buttonText}
                    </button>
                    <Link to={button.link} className="box-link">
                      <p>READ MORE ~</p>
                    </Link>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
      <Link to="/blogs" className="buttonmain-container">
        <button className="button-portfolio">View All ~</button>
      </Link>

      {/* last client rating block */}
      <h3 className="technologycontainer">What clients say about us?</h3>
      <div className="languagecontainer" style={{ marginBottom: "70px" }}>
        {clientblock.map((box) => (
          <div key={box.id} className="client-box" style={{ height: "40vh" }}>
            <p>{box.content}</p>
            <h3 style={{ fontWeight: "600" }}>
              <i>{box.name}</i>
            </h3>
          </div>
        ))}
      </div>
    </Layoutmain>
  );
};

export default Home;
