import React from "react";
import access from "../../assets/images/access.png";
import cowry from "../../assets/images/cowry.png";
import first from "../../assets/images/first.png";
import wema from "../../assets/images/wema.png";
import Marquee from "react-double-marquee";
import "./tools.css";

export default function Tools() {
  return (
    <div className="container-fluid tools m-0 pt-5 pb-5">
      <h6 className="container pt-5 tools-title">Tools {"&"} Technology</h6>
      <div
        className="text-center tools-slide mt-5"
        style={{ whiteSpace: "nowrap" }}
      >
        <Marquee>
          <img
            src={access}
            className="img-fluid m-5"
            width="150em"
            height="50em"
            alt="logo"
          />
          <img
            src={cowry}
            className="img-fluid m-5"
            width="150em"
            height="150em"
            alt="logo"
          />
          <img
            src={first}
            className="img-fluid m-5"
            width="180em"
            height="80em"
            alt="logo"
          />
          <img
            src={wema}
            className="img-fluid m-5"
            width="150em"
            height="50em"
            alt="logo"
          />
        </Marquee>
      </div>
    </div>
  );
}
