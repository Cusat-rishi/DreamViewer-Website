import React from "react";
import Headermain from "./Headermain";
import Footerz from "./Footerz";
const Layoutmain = ({ children }) => {
  // destructuring children
  return (
    <>
      <Headermain />
      <div>{children}</div>
      <Footerz />
    </>
  );
};

export default Layoutmain;
