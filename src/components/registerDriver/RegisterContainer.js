import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import RegisterDocs from "./RegisterDocs";
import RegisterDriver from "./RegisterDriver";

const RegisterContainer = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-10  p-5">
          <div className="position-relative m-4">
            <div className="progress" style={{ height: "3px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <Link
              type="button"
              className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
              style={{ width: "3rem", height: "3rem" }}
              to={`${url}/personales`}
            >
              1
            </Link>
            <Link
              type="button"
              className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
              style={{ width: "3rem", height: "3rem" }}
              to={`${url}/documentos`}
            >
              2
            </Link>
            <button
              type="button"
              className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill"
              style={{ width: "3rem", height: "3rem" }}
            >
              3
            </button>
          </div>
        </div>
      </div>
      <Switch>
        <Route path={`${path}/personales`} children={<RegisterDriver />} />
        <Route path={`${path}/documentos`} children={<RegisterDocs />} />
      </Switch>
    </div>
  );
};

export default RegisterContainer;
