import React from "react";
import { Link } from "react-router-dom";

export default function MlAnalytics() {
  return (
    <div className="container project mt-5">
      <p className="ml-intro">Ml / Analytics</p>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        <div className="col mt-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Tools: <span className="item-list">Java</span>{" "}
              </li>
              <li className="list-group-item">
                Technology: <span className="item-list">Java</span>{" "}
              </li>
            </ul>
            <div className="card-body add-link">
              <Link
                to="/"
                className="card-link"
                data-bs-toggle="modal"
                data-bs-target="#ml-modal"
              >
                + More
              </Link>
            </div>
          </div>
        </div>
        <div className="col mt-4">
          <div className="card" style={{ width: "21.5rem" }}>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Tools: <span className="item-list">Java</span>{" "}
              </li>
              <li className="list-group-item">
                Technology: <span className="item-list">Java</span>{" "}
              </li>
            </ul>
            <div className="card-body add-link">
              <Link to="/" className="card-link">
                + More
              </Link>
            </div>
          </div>
        </div>
        <div className="col mt-4">
          <div className="card" style={{ width: "21.5rem" }}>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Tools: <span className="item-list">Java</span>{" "}
              </li>
              <li className="list-group-item">
                Technology: <span className="item-list">Java</span>{" "}
              </li>
            </ul>
            <div className="card-body add-link">
              <Link to="/" className="card-link">
                + More
              </Link>
            </div>
          </div>
        </div>
        <div className="col mt-4">
          <div className="card" style={{ width: "21.5rem" }}>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Tools: <span className="item-list">Java</span>{" "}
              </li>
              <li className="list-group-item">
                Technology: <span className="item-list">Java</span>{" "}
              </li>
            </ul>
            <div className="card-body add-link">
              <Link to="/" className="card-link">
                + More
              </Link>
            </div>
          </div>
        </div>
        <div className="col mt-4">
          <div className="card" style={{ width: "21.5rem" }}>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Tools: <span className="item-list">Java</span>{" "}
              </li>
              <li className="list-group-item">
                Technology: <span className="item-list">Java</span>{" "}
              </li>
            </ul>
            <div className="card-body add-link">
              <Link to="/" className="card-link">
                + More
              </Link>
            </div>
          </div>
        </div>
        <div className="col mt-4">
          <div className="card" style={{ width: "21.5rem" }}>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Tools: <span className="item-list">Java</span>{" "}
              </li>
              <li className="list-group-item">
                Technology: <span className="item-list">Java</span>{" "}
              </li>
            </ul>
            <div className="card-body add-link">
              <Link to="/" className="card-link">
                + More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
