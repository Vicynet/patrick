import React from "react";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import twitter from "../../assets/images/twitter.png";
import "./footer.css";

export default function Footer() {
  return (
    <div className="container-fluid footer" id="footer">
      <div className="row">
        <div className="col-md-4 footer-left p-0">
          <p className="footer-title">Let's Connect</p>
          <p className="footer-sub">
            I am always open for discussion on projects and challenges.
          </p>
          <div className="profiles">
            <img
              src={linkedin}
              className="linked-profiles"
              width="35px"
              alt="LinkedIn"
            />
            <img
              src={github}
              className="linked-profiles"
              width="35px"
              alt="Github"
            />
            <img
              src={twitter}
              className="linked-profiles"
              width="35px"
              alt="Twitter"
            />
          </div>

          <p className="email">patrickojunde@gmail.com</p>
        </div>
        <div className="col-md-8 footer-right p-0">
          <form id="form" className="footer-right">
            <div className="row row-cols-1 row-cols-md-1">
              <div className="col mb-2">
                <input
                  type="text"
                  className="form-control rounded-0 shadow-none"
                  required
                  pattern="[A-Za-z0-9]+"
                  style={{
                    fontWeight: 200,
                    fontSize: ".8rem",
                    minHeight: "50px",
                  }}
                  name="fullname"
                  id="fullname"
                  placeholder="Your name"
                />
              </div>

              <div className="col mb-2">
                <input
                  type="email"
                  className="form-control rounded-0 shadow-none"
                  required
                  style={{
                    fontWeight: 200,
                    fontSize: ".8rem",
                    minHeight: "50px",
                  }}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  name="email"
                  id="email"
                  placeholder="Your email"
                />
              </div>
              <div className="col mb-2">
                <input
                  type="text"
                  className="form-control rounded-0 shadow-none"
                  required
                  style={{
                    fontWeight: 200,
                    fontSize: ".8rem",
                    minHeight: "50px",
                  }}
                  name="project"
                  id="project"
                  placeholder="Project details"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary form-button shadow-none"
              style={{
                fontWeight: 200,
                fontSize: ".8rem",
                width: "100%",
                minHeight: "50px",
              }}
            >
              Keep me informed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
