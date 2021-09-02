import { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from "./components/movieTemplate/Main.js";

import "./App.scss";

import {About, Home} from "./pages";
import {Layout} from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <ul className="App-side--nav">
              <li>
                <Link className="App-side--nav_link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="App-side--nav_link" to="/films">
                  Films
                </Link>
              </li>
            </ul>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/films" component={Main} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
