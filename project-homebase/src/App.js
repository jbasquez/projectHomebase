import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Home from './pages/home';
import NavBar from "./components/navBar";
import Welcome from "./components/welcome";
import About from "./pages/about";
import "../src/css/home.css";
import Lessons from "../src/pages/lessonpg";

function App() {
    return (
      <div className="App">
        <Router>
            <NavBar />
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/welcome"} component={Welcome} />
              <Route exact path={"/about"} component={About} />
              <Route exact path={"/lessons"} component={Lessons} />
            </Switch>
          </Router>
      </div>
    );
  }

  export default App;
