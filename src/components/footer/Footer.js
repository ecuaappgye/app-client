import { Link } from "react-router-dom";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import disponGP from "../../assets/img/disponiblegp.png";
import disponIP from "../../assets/img/disponibleip.png";

const Footer = () => {
  return (
    <div>
      <footer className=" text-center text-white" style={{backgroundColor: "#005097"}} >
        <div className="container p-4">
          <section className="mb-4">
            <Link
              className="btn btn-outline-light m-1"
              to="#Inicio"
              role="button"
              alt="Facebook WAY"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>

            <Link
              className="btn btn-outline-light m-1"
              to="#Inicio"
              role="button"
              alt="Instagram WAY"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </section>
          <section className="mb-4">
            <h3>CONOCE DE NUESTRAS PROMOCIONES</h3>
          </section>

          <section className="mb-4">
            <p>
              Entérate de todas las novedades en tarifas, servicios y
              promociones.
            </p>
          </section>

          <section className="">
            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="CorreoSubcripcion"
                        className="form-control"
                        placeholder="Correo Electrónico"
                      />
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <button
                      type="submit"
                      className="btn btn-outline-light mb-4"
                    >
                      Suscríbete
                    </button>
                  </div>
                </div>
              </form>
            </section>

            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">MÁS DE NOSOTROS</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#Inicio" className="text-white">
                      Acerca de Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link to="#Inicio" className="text-white">
                      ¿Quisieras estar en el equipo?
                    </Link>
                  </li>
                  <li>
                    <Link to="#Inicio" className="text-white">
                      Normas de Conductor
                    </Link>
                  </li>
                  <li>
                    <Link to="#Inicio" className="text-white">
                      Normas de Pasajeros
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">RECURSOS</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#Inicio" className="text-white">
                      Centro de ayuda
                    </Link>
                  </li>
                  <li>
                    <Link to="#Inicio" className="text-white">
                      Condiciones
                    </Link>
                  </li>
                  <li>
                    <Link to="#Inicio" className="text-white">
                      Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link to="#Inicio" className="text-white">
                      Politicas de calidad
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">PRODUCTOS</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link
                      to="#Inicio"
                      className="text-white font-weight-normal"
                    >
                      Conductores
                    </Link>
                  </li>
                  <li>
                    <Link to="#Inicio" className="text-white">
                      Pasajeros
                    </Link>
                  </li>
                  <li>
                    <Link to="#Inicio" className="text-white">
                      Empresa
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">DESCARGA LA APP</h5>
                <div className="col-auto">
                  <Link className="navbar-brand" to="#">
                    <img src={disponGP} alt="" />
                  </Link>
                </div>
                <div className="col-auto mt-2">
                  <Link className="navbar-brand" to="#">
                    <img src={disponIP} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-3">
          © 2021 Way-
          <Link className="text-white" to="https://way.com/">
            www.way.com
          </Link>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
