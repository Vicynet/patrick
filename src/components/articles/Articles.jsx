import React from "react";
import art1 from "../../assets/images/art1.png";
import "./articles.css";
import { Link } from "react-router-dom";

export default function Articles() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        <div className="col mt-5">
          <Link to="/">
            <div className="card article-card" style={{ width: "21.5rem" }}>
              <img src={art1} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">
                  <span className="badge rounded-pill bg-primary card-title category">
                    MlOps
                  </span>
                </h5>

                <p className="card-text article-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/">
            <div className="card article-card" style={{ width: "21.5rem" }}>
              <img src={art1} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">
                  <span className="badge rounded-pill bg-primary card-title category">
                    MlOps
                  </span>
                </h5>
                <p className="card-text article-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/">
            <div className="card article-card" style={{ width: "21.5rem" }}>
              <img src={art1} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">
                  <span className="badge rounded-pill bg-primary card-title category">
                    MlOps
                  </span>
                </h5>
                <p className="card-text article-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/">
            <div className="card article-card" style={{ width: "21.5rem" }}>
              <img src={art1} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">
                  <span className="badge rounded-pill bg-primary card-title category">
                    MlOps
                  </span>
                </h5>
                <p className="card-text article-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/">
            <div className="card article-card" style={{ width: "21.5rem" }}>
              <img src={art1} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">
                  <span className="badge rounded-pill bg-primary card-title category">
                    MlOps
                  </span>
                </h5>
                <p className="card-text article-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/">
            <div className="card article-card" style={{ width: "21.5rem" }}>
              <img src={art1} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">
                  <span className="badge rounded-pill bg-primary card-title category">
                    MlOps
                  </span>
                </h5>
                <p className="card-text article-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
