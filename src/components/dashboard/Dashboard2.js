import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard.css";
import { Avatar } from "../../assets/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import logoImgMini from "../../assets/img/wayLogomini.png";
import {
  faAddressCard,
  faBars,
  faCar,
  faIdCard,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard2 = () => {
  const [showSidebar, setShowSidebar] = useState("");
  const [showHeader, setShowHeader] = useState("");

  const show = () => {
    if (!showSidebar) {
      setShowHeader("body-pd");
      setShowSidebar("show");
      return;
    }
    setShowHeader("");
    setShowSidebar("");
    return;
  };

  return (
    <div id="body-pd">
      <header className={`header ${showHeader}`} id="header">
        <span className="header_toggle" role="button" onClick={() => show()}>
          <FontAwesomeIcon icon={faBars} id="header-toggle" />
        </span>
        <div className="dropdown">
          <Link
            to="#"
            className=" align-items-center text-white text-decoration-none dropdown-toggle"
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
        {/*<div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
  </div>*/}
      </header>
      <div className={`l-navbar ${showSidebar}`} id="nav-bar">
        <div className="nav">
          <div>
            <Link to="#" class="nav_logo">
              <img
                src={logoImgMini}
                className="bx bx-layer nav_logo-icon"
                alt="Logo way"
              />
            </Link>
            <div className="nav_list">
              <Link to="#" className="nav_link">
                <FontAwesomeIcon icon={faCar} size="lg" />
                <span className="text-decoration-none">Carreras</span>
              </Link>
              <Link to="#" className="nav_link">
                <FontAwesomeIcon icon={faIdCard} size="lg" />
                <span className="nav_name">Identificación</span>
              </Link>
              <Link to="#" className="nav_link">
                <FontAwesomeIcon icon={faAddressCard} size="lg" />
                <span className="nav_name">Transacciones</span>
              </Link>
              <Link to="#" className="nav_link">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
                <span className="nav_name">Libro</span>
              </Link>
              <Link to="#" className="nav_link">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
                <span className="nav_name">Archivos</span>
              </Link>
              <Link to="#" className="nav_link">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
                <span className="nav_name">Estatico</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
