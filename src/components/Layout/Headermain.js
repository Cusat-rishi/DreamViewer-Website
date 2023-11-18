// import React from "react";
import React, { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Headermain = () => {
  ///////for mobile view:-----------------------------------------
  // const [MobileOpen, setMobileOpen] = useState(false);
  // // handle menu click
  // const handleDrawerToggle = () => {
  //   setMobileOpen(!MobileOpen);
  // };
  // //
  // //menu drawer
  // const drawer = (
  //   <Box Onclick={handleDrawerToggle} sx={{ textAlign: "center" }}>

  //   </Box>
  // );

  // const [careersOptions] = useState(["Job Openings", "Why Us"]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const handleHover = () => {
    setIsOpen(!isOpen);
  };
  const handleHover2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };
  const serviceOptions = [
    {
      link: "/UiuxPage",
      label: "UI/UX",
    },
    {
      link: "/Blockchain",
      label: "Blockchain",
    },
    {
      link: "/WebApp",
      label: "Web Development Services",
    },
    {
      link: "/MobileApp",
      label: "Mobile App Services",
    },
    {
      link: "/Gaming",
      label: "Gaming Services",
    },
    {
      link: "/ErpSoftware",
      label: "ERP Software",
    },
    {
      link: "/AiChatbot",
      label: "AI/ML chatbots",
    },
  ];

  const careerOptions = [
    {
      link: "/Jobsopenings",
      label: "Job Openings",
    },
    {
      link: "/Whyus",
      label: "Why Us",
    },
  ];
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#3e4348" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              display="flex"
              alignItems="center"
              color="#e1e5e7"
              font-family="'HCo Gotham SSm', 'Helvetica Neue' Helvetica, Arial, sans-serif"
              fontWeight="500"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img
                src="/logomain.png"
                alt="Logo"
                style={{
                  maxWidth: "80px",
                  marginRight: "12px",
                  marginLeft: "20px",
                }}
              />
              {/* TechDreamView */}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <div className="custom-dropdown">
                    <div className="select-container">
                      <div
                        className="row"
                        onClick={handleHover}
                        // onMouseEnter={handleHover}
                        // onMouseLeave={handleMouseLeave}
                      >
                        <span className="select-option">SERVICES</span>
                        <p className="select-option me-2">
                          <ArrowDropDownIcon />
                        </p>
                      </div>
                      <div
                        className={`select-dropdown ${isOpen ? "open" : ""}`}
                      >
                        {serviceOptions.map((option, index) => (
                          <div className="select-optionS" key={index}>
                            <Link to={option.link} onClick={handleMouseLeave}>
                              {option.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link to={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                  <Link to={"/blogs"}>Blogs</Link>
                </li>

                <li>
                  <div className="custom-dropdown">
                    <div className="select-container">
                      <div
                        className="row"
                        onClick={handleHover2}
                        // onMouseEnter={handleHover}
                        // onMouseLeave={handleMouseLeave}
                      >
                        <span className="select-option">CAREERS</span>
                        <p className="select-option me-2">
                          <ArrowDropDownIcon />
                        </p>
                      </div>
                      <div
                        className={`select-dropdown ${isOpen2 ? "open" : ""}`}
                      >
                        {careerOptions.map((option, index) => (
                          <div className="select-optionS" key={index}>
                            <Link to={option.link} onClick={handleMouseLeave2}>
                              {option.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                <Link to="/Contactus" className="nounderline">
                  <button className="button-Container">Get a Quote</button>
                </Link>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Headermain;
