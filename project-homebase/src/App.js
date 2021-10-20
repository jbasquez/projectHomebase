import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Home from './pages/home';
import NavBar from "./components/navBar";

function App() {
    return (
      <div className="App">
        <Router>
            <NavBar />
            <Switch>
              <Route exact path={"/"} component={Home} />
            </Switch>
          </Router>
      </div>
    );
  }

  export default App;
