import React from "react";
import Layoutmain from "../components/Layout/Layoutmain";
import index from "./index";
import "../styles/blockchainstyle.css";
import Image from "../images/home.jpg";
import { Link } from "react-router-dom";
const Blockchain = () => {
  return (
    <Layoutmain>
      <div
        className="bchainhome"
        style={{
          backgroundImage: `url(${Image})`,
          height: "55vh",
          width: "195.5vh",
        }}
      >
        <div className="overlaybchain">
          <p>BLOCKCHAIN</p>
        </div>
      </div>
      <div className="blockchain-contents">
        <div className="contentbchain-image">
          <img
            src={index.blockchain1}
            alt="Description of the image"
            style={{
              height: "70vh",
              width: "75vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "35px",
            }}
          />

          <div className="contents-containerbchain">
            <h3 style={{ lineHeight: "45px" }}>
              The Future is Here: How Blockchain is Revolutionizing Industries
              Across the Globe.
            </h3>
            {/* <h3>We are Creative Tech Enthusiast working since 2021.</h3> */}
            <p>
              We offer a range of blockchain services designed to help
              businesses harness the power of this revolutionary technology.We
              also provide guidance on the best blockchain platforms to use, as
              well as help with implementation and integration.
            </p>
          </div>
        </div>
      </div>
      <div className="boxelements-container">
        <div className="blockchain-box1">
          <h3>
            With the assistance of our professionals, introduce your blockchain
            products to the market.
          </h3>
          <p>
            Our company offers expert assistance to businesses and individuals
            looking to launch their blockchain products. With our team's
            extensive knowledge of blockchain technology and experience in
            product launches, we can help ensure a successful roll-out. By
            working with us, clients can benefit from our expertise in marketing
            and market penetration. We emphasize the importance of a
            well-executed launch, which is why we offer our services to help
            clients achieve their goals. Let us help you bring your blockchain
            products to the market with confidence.
          </p>
        </div>
        <div className="blockchain-box2">
          <h3>HashKey</h3>
          <p>
            HashKey is a digital asset management platform that provides
            end-to-end solutions for institutional and individual clients. It
            offers services such as trading, custody, research, and investment
            management for cryptocurrencies and other digital assets. The
            platform focuses on security, transparency, and innovation to
            deliver a comprehensive suite of services for its clients.
          </p>
        </div>
        <div className="blockchain-box3">
          <h3>Crypto</h3>
          <p>
            Cryptocurrency is a digital or virtual currency that utilizes
            cryptographic techniques to secure and verify transactions and to
            control the creation of new units. It operates independently of
            traditional financial institutions and is often decentralized, with
            transactions recorded on a public ledger called a blockchain.
          </p>
        </div>
      </div>
      <div className="blockchain-contents">
        <div className="contentbchain-image">
          <img
            src={index.blockchain2}
            alt="Description of the image"
            style={{
              height: "70vh",
              width: "75vh",
              borderRadius: "25px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              marginTop: "25px",
              marginBottom: "30px",
            }}
          />

          <div className="contents-containerbchain">
            <h3 style={{ lineHeight: "45px" }}>Blockchain-Trading App</h3>
            {/* <h3>We are Creative Tech Enthusiast working since 2021.</h3> */}
            <p>
              A trading app built with blockchain is a mobile application that
              enables users to buy, sell, and trade various assets, including
              cryptocurrencies, tokens, and other digital assets, using
              blockchain technology. <br />
              One of the key features of a blockchain trading app is the ability
              to provide a secure and transparent platform for trading.
              Blockchain technology ensures that all transactions are recorded
              on a public ledger, which cannot be tampered with or altered,
              providing a high level of security and transparency for users.{" "}
              <br />
              Overall, a blockchain trading app can provide a secure,
              transparent, and efficient platform for buying, selling, and
              trading various digital assets. With its advanced features and
              user-friendly interface, it can make trading more accessible to a
              wider range of users and help drive the growth of the blockchain
              ecosystem.
            </p>
            <h3 style={{ lineHeight: "45px", marginTop: "90px" }}>
              Our experts will help you to solve your queries:
            </h3>
            <Link to="/Contactus">
              <button className="blockchain-button">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </Layoutmain>
  );
};

export default Blockchain;
