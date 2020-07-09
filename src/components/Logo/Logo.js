import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain-icon.png";

const Logo = () => {
  return (
    <Tilt
      className="Tilt br2 shadow-2 pa2"
      options={{ max: 35 }}
      style={{ height: 100, width: 100 }}
    >
      <div className="Tilt-inner">
        <img style={{ paddingTop: "0px" }} alt="brain-logo" src={brain} />
      </div>
    </Tilt>
  );
};

export default Logo;
