import React, { useState } from "react";
import { Link } from "react-router-dom";
import { wayLogo } from "../../assets/img/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Dashboard = () => {
  const [isActive, setIsActive] = useState(false);
  
  
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "280px", height: "650px" }}
      >
        <div className="d-flex p-3">
          <Link
            to="/"
            className="d-flex align-items-center  mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <img src={wayLogo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="#" className={`nav-link text-white ${isActive ? "" : "active"}`} aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <FontAwesomeIcon icon={faFacebook} />
              </svg>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <FontAwesomeIcon icon={faFacebook} />
              </svg>
              Carrera
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <FontAwesomeIcon icon={faFacebook} />
              </svg>
              Pasajeros
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <FontAwesomeIcon icon={faFacebook} />
              </svg>
              Productos
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <FontAwesomeIcon icon={faFacebook} />
              </svg>
              Configuración
            </Link>
          </li>
        </ul>
        <div className="dropdown-divider"></div>
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
            <strong>David Romero</strong>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link className="dropdown-item" to="#">
                Nuevos Usuario
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Configuración
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Perfil
              </Link>
            </li>
            <li className="dropdown-divider"></li>
            <li>
              <Link className="dropdown-item" to="#">
                Salir
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
