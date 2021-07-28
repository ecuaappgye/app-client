import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import FormMail from "./components/recovery/FormMail";
import Register from "./components/register/Register";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { useAuth } from "./provider/AuthProvider";
import MapViewer from "./components/map/MapViewer";
import RegisterContainer from "./components/registerDriver/RegisterContainer";
import FormValidateCount from "./components/recovery/FormValidateCount";

function App() {
  const auth = useAuth();
  console.log(auth);
  return (
    <Router>
      <div className="">
        <Header />
        <Switch>
          <Route path="/mapa" children={<MapViewer />} />
          <Route path="/login/validation" children={<FormValidateCount />} />
          <Route path="/login/register" children={<Register />} />
          <Route path="/register/driver" children={<RegisterContainer />} />
          <Route path="/login/recovery" children={<FormMail />} />
          <Route path="/home" children={<Home />} />
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
