import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Home from './pages/home';
import NavBar from "./components/navBar";
import Welcome from "./components/welcome";
import About from "./pages/about";
import "../src/css/home.css";
import Lessons from "../src/pages/lessonpg";
import Unit1 from "./components/units/unit1";
import Unit2 from "./components/units/unit2";

function App() {
    return (
      <div className="App">
        <Router>
            <NavBar />
            <Switch>
              <Route exact path={"/projectHomebase"} component={Home} />
              <Route exact path={"/welcome"} component={Welcome} />
              <Route exact path={"/about"} component={About} />
              <Route exact path={"/lessons"} component={Lessons} />
              <Route exact path={"/unit1"} component={Unit1} />
              <Route exact path={"/unit2"} component={Unit2} />
            </Switch>
          </Router>
      </div>
    );
  }

  export default App;
