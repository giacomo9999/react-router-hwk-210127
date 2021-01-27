import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/courses">Courses</NavLink>
                  {/* <a href="/courses">Courses</a> */}
                </li>
                <li>
                  <NavLink to="/users">Users</NavLink>
                  {/* <a href="/users">Users</a> */}
                </li>
              </ul>
            </nav>
          </header>
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
