import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import Image from "../images/home.jpg";
import "../styles/portfoliostyle.css";
import index from "./index";
const Portfolio = () => {
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
  const portfolio2 = [
    {
      id: 1,
      image: `${index.portfolio5}`,
      title: "Tax Service website",
      content:
        "Our Tax Service website provides comprehensive financial solutions tailored to meet your unique needs. Our team of certified professionals is dedicated to helping individuals and businesses navigate complex financial situations, from tax planning and preparation to financial reporting and consulting. With our expertise and personalized approach, we strive to maximize your financial success and secure your financial future.",
    },
    {
      id: 2,
      image: `${index.portfolio6}`,
      title: "Interior me",
      content:
        "livehealthify is afitness app that offers personalized diet plans, workout routines, and calorie tracking features. With its user-friendly interface and expert guidance, HealthifyMe makes it easy for users to achieve their health and fitness goals.",
    },
    {
      id: 3,
      image: `${index.portfolio7}`,
      title: "E-commerce website",
      content:
        "livehealthify is afitness app that offers personalized diet plans, workout routines, and calorie tracking features. With its user-friendly interface and expert guidance, HealthifyMe makes it easy for users to achieve their health and fitness goals.",
    },
    {
      id: 4,
      image: `${index.portfolio8}`,
      title: "MLM-RealHeaven",
      content:
        "MLM is a business model where members earn income not only from their own sales but also from the sales of their downline, which consists of members they have recruited. RealHeaven claims to have a state-of-the-art compensation plan that is highly profitable and designed to provide a steady stream of income. A compensation plan is a crucial element of an MLM business, as it outlines how members will be paid for their sales and the sales of their downline.",
    },
  ];
  const portfolio3 = [
    {
      id: 1,
      image: `${index.portfolio9}`,
      title: "Tax Service website",
      content:
        "Our Tax Service website provides comprehensive financial solutions tailored to meet your unique needs. Our team of certified professionals is dedicated to helping individuals and businesses navigate complex financial situations, from tax planning and preparation to financial reporting and consulting. With our expertise and personalized approach, we strive to maximize your financial success and secure your financial future.",
    },
    {
      id: 2,
      image: `${index.portfolio10}`,
      title: "Interior me",
      content:
        "livehealthify is afitness app that offers personalized diet plans, workout routines, and calorie tracking features. With its user-friendly interface and expert guidance, HealthifyMe makes it easy for users to achieve their health and fitness goals.",
    },
    {
      id: 3,
      image: `${index.portfolio11}`,
      title: "E-commerce website",
      content:
        "livehealthify is afitness app that offers personalized diet plans, workout routines, and calorie tracking features. With its user-friendly interface and expert guidance, HealthifyMe makes it easy for users to achieve their health and fitness goals.",
    },
    {
      id: 4,
      image: `${index.portfolio12}`,
      title: "MLM-RealHeaven",
      content:
        "MLM is a business model where members earn income not only from their own sales but also from the sales of their downline, which consists of members they have recruited. RealHeaven claims to have a state-of-the-art compensation plan that is highly profitable and designed to provide a steady stream of income. A compensation plan is a crucial element of an MLM business, as it outlines how members will be paid for their sales and the sales of their downline.",
    },
  ];
  return (
    <Layoutmain>
      <div
        className="home"
        style={{
          backgroundImage: `url(${Image})`,
          height: "70vh",
          width: "195.5vh",
        }}
      >
        <div className="overlayportfolio">
          <p>OUR RICH PORTFOLIO</p>
          <h3>Have a look at our portfolio.We are proud of what we do.</h3>
        </div>
      </div>

      <div className="languagecontainer">
        {portfolio.map((box) => (
          <div key={box.id} className="portfolio-box">
            <img src={box.image} alt={box.title} className="portfolio-image" />
            <h3>{box.title}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
      <div className="languagecontainer">
        {portfolio2.map((box) => (
          <div key={box.id} className="portfolio-box">
            <img src={box.image} alt={box.title} className="portfolio-image" />
            <h3>{box.title}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
      <div className="languagecontainer">
        {portfolio3.map((box) => (
          <div key={box.id} className="portfolio-box">
            <img src={box.image} alt={box.title} className="portfolio-image" />
            <h3>{box.title}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
      {/* <div className="title-container">
        <p>Stay in touch with us</p>
      </div> */}
    </Layoutmain>
  );
};

export default Portfolio;
