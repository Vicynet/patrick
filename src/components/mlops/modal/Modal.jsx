import React from "react";
import "./modal.css";
import { Link } from "react-router-dom";

export default function Modal() {
  return (
    <div
      className="modal fade"
      id="ml-modal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen">
        <div className="modal-content pop-content">
          <div className="modal-header pop-header">
            <h5 className="modal-title pop-title" id="exampleModalLabel">
              Ml / Ops
            </h5>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
              </svg>
            </button>
          </div>
          <div className="modal-body pop-body">
            <p className="content-title">
              Computer vision with Python and Golang
            </p>
            <p className="content-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              vitae porta at varius habitasse lectus. Eu nunc, fusce aliquam
              imperdiet arcu. Id viverra vitae proin semper elementum id sed.
              Diam amet tellus arcu sodales. Diam tincidunt tristique in
              consectetur in diam dolor consectetur sit. Orci, diam sed nunc
              porta sed faucibus integer ullamcorper vulputate. Fermentum nibh
              vitae diam feugiat velit eu, purus consectetur orci. Cras libero
              nec nibh nulla vel amet integer elit. Aenean pretium ornare ut
              enim mattis nunc fusce enim. Dapibus viverra id faucibus malesuada
              viverra orci laoreet ac. Aliquet at neque adipiscing convallis
              aliquam. Aenean convallis nibh quisque arcu et. Lectus massa
              tempus parturient risus vitae, dictumst elit amet sed. Orci at in
              blandit aenean nisi, amet.
              {/* <>
                {" "}
                <p></p>
              </> */}
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              vitae porta at varius habitasse lectus. Eu nunc, fusce aliquam
              imperdiet arcu. Id viverra vitae proin semper elementum id sed.
              Diam amet tellus arcu sodales. Diam tincidunt tristique in
              consectetur in diam dolor consectetur sit. Orci, diam sed nunc
              porta sed faucibus integer ullamcorper vulputate. Fermentum nibh
              vitae diam feugiat velit eu, purus consectetur orci. Cras libero
              nec nibh nulla vel amet integer elit. Aenean pretium ornare ut
              enim mattis nunc fusce enim. Dapibus viverra id faucibus malesuada
              viverra orci laoreet ac. Aliquet at neque adipiscing convallis
              aliquam. Aenean convallis nibh quisque arcu et. Lectus massa
              tempus parturient risus vitae, dictumst elit amet sed. Orci at in
              blandit aenean nisi, amet.
            </p>
            <p className="content-link">
              <Link to="/">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-link-45deg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                  </svg>
                </span>
                &nbsp;&nbsp; Link to project
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
