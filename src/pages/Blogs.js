import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import { Link } from "react-router-dom";
import Image from "../images/home.jpg";
import "../styles/BlogsStyle.css";
import index from "./index";
const Blogs = () => {
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
    { id: 1, link: "/learn-more" },
    { id: 2, link: "/explore" },
    { id: 3, link: "/addlink" },
    // Add more button links as needed
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
  const blogsblock2 = [
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
  const blogsblock3 = [
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
        <div className="overlayblog">
          <p>OUR LATEST BLOGS</p>
        </div>
      </div>
      <div className="title-container">
        <p>Blogs</p>
      </div>
      <p className="title-container2" style={{ fontWeight: "600" }}>
        Recent posts form our Blog.
      </p>

      <div className="languagecontainer">
        {blogsblock.map((box) => (
          <div key={box.id} className="blogscontent-box">
            <img src={box.image} alt={box.title} className="blogs-image" />
            <h3 style={{ fontWeight: "400" }}>{box.date}</h3>
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

      <div className="languagecontainer">
        {blogsblock2.map((box) => (
          <div key={box.id} className="blogscontent-box">
            <img src={box.image} alt={box.title} className="blogs-image" />
            <h3 style={{ fontWeight: "400" }}>{box.date}</h3>
            <h3>{box.title}</h3>
            <p>{box.content}</p>
            {/* Additional button and link */}
            {buttonLinks2.map(
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

      <div className="languagecontainer">
        {blogsblock3.map((box) => (
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
      {/* <Link to="/Blogs" className="buttonmain-container">
        <button className="button-portfolio">View All ~</button>
      </Link> */}
    </Layoutmain>
  );
};

export default Blogs;
