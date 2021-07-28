import {
  faBorderAll,
  faHome,
  faMapMarkedAlt,
  faTh,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MapViewer from "../map/MapViewer";

const Home = () => {
  return (
    <div className="">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100"
        style={{ width: "280px" }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Way</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <FontAwesomeIcon icon={faHome} />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <FontAwesomeIcon icon={faTh} />
              </svg>
              Orders
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <FontAwesomeIcon icon={faBorderAll} />
              </svg>
              Products
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <FontAwesomeIcon icon={faUserCircle} />
              </svg>
              Customers
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <Link
            to="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link className="dropdown-item" to="#">
                New project...
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    
      <MapViewer />
    </div>
  );
};

export default Home;
