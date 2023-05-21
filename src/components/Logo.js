import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div styles={{ width: "100%", height: "100%" }}>
      <img
        src={logo}
        alt="ATG Logo"
        styles={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Logo;
