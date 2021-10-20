import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Home from './pages/home';
import NavBar from "./components/navBar";
import Welcome from "./components/welcome";

function App() {
    return (
      <div className="App">
        <Router>
            <NavBar />
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/welcome"} component={Welcome} />
            </Switch>
          </Router>
      </div>
    );
  }

  export default App;
