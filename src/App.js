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
import About from "./components/about/About";
import Home from "./components/home/Home";
import Forms from "./components/form/Form";
import StepProgress from "./components/stepProgress/StepProgress";
import Dashboard2 from "./components/dashboard/Dashboard2";

function App() {
  return (
    <Router>
      <div >

      <Dashboard2/>
        <Switch>
          <Route path="/about"children={<About />}/>
          <Route path="/login/register" children={<Register />} />
          <Route path="/driver" children={<RegisterDriver />} />
          <Route path="/login/recovery" children={<FormMail />} />
          <Route path="/home" children={<Home/>} />
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
