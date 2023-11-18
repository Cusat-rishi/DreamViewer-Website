// import React from "react";
import React, { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Typography } from "@mui/material";
// import image from "./index";
import Image from "../../images/logomain.png";
import "../../styles/Footerstyle.css";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";

const Footerz = () => {
  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "12px 16px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  };

  const hoverStyle = {
    backgroundColor: "rgb(128,128,128)",
    color: "black",
    borderRadius: "50px",
  };

  // back to top
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Add scroll event listener to window
    const handleScroll = () => {
      // Set isVisible to true when the user scrolls down, and false when at the top
      const scrollTop = window.scrollY;
      const threshold = 300; // Adjust as needed
      setIsVisible(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "#3e4348",
          color: "#e1e5e7",
          p: 3,
          fontFamily:
            "HCo Gotham SSm', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          // lineHeight: "90px",
        }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <LinkedInIcon />
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            mt: 3,
          }}
        >
          {/* Section 1 */}
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <Typography variant="h6" color="white">
              DreamViewer Infotech
            </Typography>
            <address className="address">
              <p>
                H-150, Sector 63, Delhi, <br />
                Noida, Uttar Pradesh - 201301 India
              </p>
              <p>
                <strong>Phone:</strong>
                +918860464098 <br />
                +919599484325
              </p>
              <p>
                <strong>Email : </strong>
                infotechdreamviewer@gmail.com
              </p>
            </address>
          </Box>

          {/* Section 2 */}
          <Box
            sx={{
              textAlign: "left",
              lineHeight: "30px",
            }}
          >
            <Typography variant="h6" color="white">
              Quick Links
            </Typography>
            <ul className="options1">
              <li>
                <a href="/">&gt; Home</a>
              </li>
              <li>
                <a href="/about">&gt; About</a>
                {/* <Link to={"./about"}>About</Link> */}
              </li>
              <li>
                <a href="/portfolio">&gt; Portfolio</a>
              </li>
              <li>
                <a href="/blogs">&gt; Blog</a>
              </li>
              <li>
                <a href="/contactus">&gt; Contact us</a>
              </li>
            </ul>
          </Box>

          {/* Section 3 */}
          <Box
            sx={{
              textAlign: "left",
              lineHeight: "30px",
            }}
          >
            <Typography variant="h6" color="white">
              Our Services
            </Typography>
            <ul className="optionss">
              <li>
                <a href="/UiuxPage">&gt; UX/UI</a>
              </li>
              <li>
                <a href="/WebApp">&gt; Web Development Services</a>
              </li>
              <li>
                <a href="/MobileApp">&gt; Mobile App Services</a>
              </li>
              <li>
                <a href="/ErpSoftware">&gt; ERP Software</a>
              </li>
              <li>
                <a href="/Gaming">&gt; Gaming Services</a>
              </li>
              <li>
                <a href="/Blockchain">&gt; Blockchain</a>
              </li>
              <li>
                <a href="/AiChatbot">&gt; AI/ML Chatbots</a>
              </li>
            </ul>
          </Box>

          {/* Section 4 */}
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <Typography variant="h6" color="white">
              Our Newsletter
            </Typography>
            <p className="subs">
              Subscribe To our newsletter for daily Updates{" "}
            </p>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                mt: 4,
              }}
            >
              <input
                type="text"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  marginRight: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "50px",
                }}
              />
              <button
                style={{ ...buttonStyle }}
                onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
              >
                Subscribe
              </button>
              <br />
            </Box>
          </Box>
        </Box>
        {/* </Box> */}
        <box className="bottom-container">
          <Typography
            variant="h6"
            sx={{
              fontSize: "12px",
              "@media (max-width:600px)": {
                fontSize: "1rem",
              },
            }}
          >
            <button className="button-container">
              <WhatsAppIcon />
              Chat with Us
            </button>
            <h4>
              © Copyright 2020 DreamViewer Infotech. All Rights Reserved.{" "}
            </h4>
            {isVisible && (
              <IconButton
                onClick={scrollToTop}
                sx={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  zIndex: "999",
                  backgroundColor: "#11e457",
                }}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            )}
          </Typography>
        </box>
      </Box>
    </>
  );
};

export default Footerz;
