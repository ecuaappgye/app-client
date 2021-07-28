import React from "react";
import imgLogin from "../../assets/img/imgLogin.png";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchTokenThunk } from "../../actions/fetchActions";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const history = useHistory();
  // const { signIn } = useAuth();

  const onSubmit = (values) => {
    // console.log(values);
    dispatch(fetchTokenThunk(values));
    // history.push("/home");
    // postLogin(values)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };
  return (
    <div
      className="row p-4 vh-100"
      style={{ backgroundImage: `url(${imgLogin})`, backgroundSize: "cover" }}
    >
      <div className="col-md-4 mt-4">
        <div className="card p-3 row">
          <h4 className="card-title text-center mb-3">Inicio de sesión</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                {...register("email", { required: true })}
              />
              <label htmlFor="floatingInput">Correo</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>

            <Link to="/login/recovery" className="link-primary text-center">
              Olvidaste tu contraseña?
            </Link>
            <button className="btn btn-primary mt-5 w-100" onClick={onSubmit}>
              Iniciar sesión
            </button>
            <p className="mt-5 mb-3 text-muted text-center">© 2021</p>
          </form>
          {/* <div className="row mt-3 p-4 justify-content-md-center">
            <p className="text-center col-12">o</p>
            <Link
              className="btn btn-primary mb-2 col-md-8"
              to="/"
              role="button"
            >
              <FontAwesomeIcon icon={faFacebook} /> Conectar con Facebook
            </Link>
            <Link className="btn btn-primary col-md-8" role="button" to="/">
              <FontAwesomeIcon icon={faGoogle} /> Conectar con Gmail
            </Link>
          </div> */}
        </div>

        <Link to="/register/driver/personales">driver</Link>
      </div>

      <div className="col-md-8 d-flex flex-column justify-content-center w-50 ps-4">
        <p className="display-1 text-light">
          Un servicio innovador pensado para ti.
        </p>
        <p className="text-light">Se parte de nuestra comunidad</p>
      </div>
    </div>
  );
};

export default Login;
