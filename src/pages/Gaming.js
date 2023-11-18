import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import "../styles/GamingStyle.css";
import Image from "../images/home.jpg";
import index from "./index";
const Gaming = () => {
  return (
    <Layoutmain>
      <div
        className="gamehome"
        style={{
          backgroundImage: `url(${Image})`,
          height: "55vh",
          width: "195.5vh",
        }}
      >
        <div className="overlaygame">
          <p>GAME DEVELOPMENT SERVICES</p>
        </div>
      </div>
      <div className="game-contents">
        <div className="contentgame-image">
          <img
            src={index.gamingimage1}
            alt="Description of the image"
            style={{
              height: "75vh",
              width: "80vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "35px",
            }}
          />

          <div className="contents-containergame">
            <h3 style={{ lineHeight: "45px" }}>
              Experience Immersive Gaming with Our Wide Range of Services
            </h3>
            {/* <h3>We are Creative Tech Enthusiast working since 2021.</h3> */}
            <p>
              Our company provides a wide range of gaming services designed to
              give gamers the ultimate gaming experience. Our services include
              game development, game design, game testing, game optimization,
              and game hosting. We are committed to providing our clients with
              high-quality, engaging games that cater to their unique
              preferences and interests. With our experienced team of developers
              and designers, we are constantly pushing the boundaries of what's
              possible in the world of gaming. Whether you're a casual or
              hardcore gamer, our services are designed to enhance your gaming
              experience and keep you coming back for more.
            </p>
          </div>
        </div>
      </div>
      <div className="game-contents">
        <div className="contentgame-image">
          <img
            src={index.gamingimage2}
            alt="Description of the image"
            style={{
              height: "75vh",
              width: "85vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "15px",
              marginBottom: "30px",
            }}
          />

          <div className="contents-containergame">
            <h3 style={{ lineHeight: "45px" }}>Our Game Application-Bricks</h3>
            {/* <h3>We are Creative Tech Enthusiast working since 2021.</h3> */}
            <p>
              Bricks is a gaming app that is designed for Lego enthusiasts of
              all ages. With its intuitive interface and engaging gameplay,
              Bricks offers a unique and immersive experience that allows
              players to create, design, and share their own Lego models. The
              app includes a range of features such as "Scan My Bricks," which
              enables users to scan their existing Lego sets and import them
              into the app, "My MOCS" which allows users to showcase their
              creations to the community, and "Purchase New Bricks," which
              enables users to browse and buy new Lego sets directly from the
              app. With Bricks, users can unleash their creativity, connect with
              other Lego enthusiasts, and explore endless possibilities of the
              Lego universe.
            </p>
          </div>
        </div>
      </div>
      <div className="game-contents2">
        <div className="contents-containergame2">
          <h3 style={{ lineHeight: "45px", fontSize: "36px" }}>
            Reasons that make us a suitable choice for your gaming applications.
          </h3>
          <p
            style={{
              lineHeight: "25px",
              marginLeft: "70px",
              marginRight: "70px",
              marginBottom: "40px",
              marginTop: "20px",
            }}
          >
            We offer gaming services that may be a good choice who are looking
            for reliable and experienced partner in the gaming industry. We at
            DreamViewer Infotech, provides expertise in game
            development,platform management, customer support and and other
            aspects of gaming business.With a team of experienced professionals,
            we can offer gaming services that can help you create high-quality
            games, manage gaming platforms, and provide excellent customer
            service to your players. <br />
            Additionally, we offer gaming services which are cost effective and
            provide flexibilty in terms of the size and scope of gaming services
            needed.
          </p>
        </div>
      </div>
    </Layoutmain>
  );
};

export default Gaming;
