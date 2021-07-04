import React from "react";
import "./hero.css";
import mascot from "../../assets/images/patrick-mascot.png";
import vr from "../../assets/images/hero-vr.png";
import frame from "../../assets/images/frame.png";

export default function Hero() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <img src={mascot} alt="mascot" width="40" />
          <p className="intro">Hi, I am</p>
          <p className="name">Patrick Ojunde</p>
          <p className="summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id placerat
            cras tristique integer sit nisl aliquet dui. Est, arcu, donec ornare
            dictum a leo. Nulla interdum ipsum sed faucibus. Nec, purus odio sit
            pellentesque tellus at posuere et.
          </p>
          <div className="hero-email">
            <img src={vr} alt="hero-vr" width="20" />
            {/* <input
              type="email"
              class="form-control hero-input shadow-none"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            /> */}
            <a href="#footer">
              <button
                type="button"
                className="btn btn-outline-primary hero-button"
              >
                Let's connect
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-6 frame">
          <img src={frame} alt="frame" className="hero-image" />
        </div>
      </div>
    </div>
  );
}
