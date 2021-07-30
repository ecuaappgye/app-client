import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardStyle from "./Dashboard.css";
import ItemDropdownd from "./ItemDropdown";
import ItemNav from "./ItemNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import logoImgMini from "../../assets/img/wayLogomini.png";

import {
  faAddressCard,
  faBars,
  faCar,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
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
    <div id="body-pd" className="body">
      <header className={`header ${showHeader}`} id="headerDasboard">
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
            <ItemDropdownd Item={"Nuevos Usuario"} />
            <ItemDropdownd Item={"Configuracion"} />
            <ItemDropdownd Item={"Perfil"} />
            <li className="dropdown-divider"></li>
            <ItemDropdownd Item={"Salir"} />
          </ul>
        </div>
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
              <ItemNav ClassItem="" LinkN={""} IconImg={faCar} Item={"Carreras"} />
              <ItemNav ClassItem="" LinkN={""} IconImg={faIdCard} Item={"Identificación"} />
              <ItemNav ClassItem="" LinkN={""} IconImg={faAddressCard} Item={"Transacciones"} />
              <ItemNav ClassItem="" LinkN={""} IconImg={faFacebook} Item={"Libro"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
