import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch,Link} from 'react-router-dom'
import Approximation from "./modules/Approximation";
import Lagrangeinterpolation from "./modules/Lagrangeinterpolation";
import Numericalmethod from "./modules/Numericalmethod";
import NewtonsDividedDifferenceInterpolation from "./modules/Newtons_divided_difference_interpolation";


class App extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
              <Link className="navbar-brand" to="/">Numerical methods</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link className="nav-link" to="/larange-interpolation">Larange interpolation</Link>
                      </li>

                      <li className="nav-item">
                          <Link className="nav-link" to="/approximation">Approximation</Link>
                      </li>

                      <li className="nav-item">
                          <Link className="nav-link" to="/newton-interpolation">Newton's divided difference interpolation</Link>
                      </li>

                  </ul>











              </div>
          </nav>
          <Switch>
              <Route path="/" exact component={Numericalmethod}/>
              <Route path="/approximation" component={Approximation}/>
              <Route path="/larange-interpolation" component={Lagrangeinterpolation}/>
              <Route path="/newton-interpolation" component={NewtonsDividedDifferenceInterpolation}/>

          </Switch>
      </div>




    );
  }
}

export default App;
