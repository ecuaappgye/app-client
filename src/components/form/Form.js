import React from "react";

const form = () => {
  return (
    <div className="container-fluid bg-secondary">
      <div className="row justify-content-center py-5">
        <div className="col-8 border rounded-3 bg-light py-4">
          <div className="row justify-content-center">
            <div className="col-2">
              <label for="inputPassword6" className="col-form-label">
                Nombre:
              </label>
            </div>
            <div className="col-6">
              <input
                type="text"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
          <div className="row justify-content-center my-3">
        <div className="col-2">
          <label for="inputPassword6" className="col-form-label">
            Apellido:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-2">
          <label for="inputPassword6" className="col-form-label">
            Domicilio:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-2">
          <label for="inputPassword6" className="col-form-label">
            Cédula:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>

      <div className="row justify-content-center ">
        <div className="col-1 me-2">
          <button type="button" class="btn btn-primary">
            Atras
          </button>
        </div>
        <div className="col-1">
          <button type="button" class="btn btn-success">
            Siguiente
          </button>
        </div>
      </div>


        </div>
      </div>



      {/*<div className="row justify-content-center">
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label">
            Nombre:
          </label>
        </div>
        <div className="col-4">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label">
            Apellido:
          </label>
        </div>
        <div className="col-4">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label">
            Domicilio:
          </label>
        </div>
        <div className="col-4">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label">
            Cédula:
          </label>
        </div>
        <div className="col-4">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-1">
          <button type="button" class="btn btn-primary">
            Atras
          </button>
        </div>
        <div className="col-1">
          <button type="button" class="btn btn-success">
            Siguiente
          </button>
        </div>
  </div>*/}
    </div>
  );
};

export default form;
