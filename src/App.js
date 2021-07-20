import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./components/login/Login";
import FormMail from "./components/recovery/FormMail";
import Register from "./components/register/Register";
import RegisterDriver from "./components/register/RegisterDriver";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Switch>
          <Route path="/login/register" children={<Register />} />
          <Route path="/driver" children={<RegisterDriver />} />
          <Route path="/login/recovery" children={<FormMail />} />
          <Route path="/home" children={<Home/>} />
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;