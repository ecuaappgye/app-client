import React from "react";
import { Link } from "react-router-dom";
import disponIP from "../../assets/img/disponibleip.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Dashboard2 = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex  flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="menu" aria-label="Close"></button>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start "
              id="menu"
            >
              <li className="nav-item">
                <Link to="#" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline text-white">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
                </Link>
                <ul
                  className="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <Link to="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Item</span> 1{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Item</span> 2{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Orders</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#submenu2"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle "
                >
                  <i className="fs-4 bi-bootstrap"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                </Link>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu2"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <Link to="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Item</span> 1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Item</span> 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#submenu3"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-grid"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
                </Link>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu3"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <Link to="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 3
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 4
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Customers</span>{" "}
                </Link>
              </li>
            </ul>
            <div className="dropdown pb-4">
              <Link
                to="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={disponIP}
                  alt="hugenerd"
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">David Romero</span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li>
                  <Link className="dropdown-item" to="">
                    Administrar
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Configuración
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Perfil
                  </Link>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <Link className="dropdown-item" to="">
                    Salir
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
