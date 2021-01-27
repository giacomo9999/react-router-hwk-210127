import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Course from "../Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <article className="Course" key={course.id}>
                <Link to={`/course/${course.id}`}>{course.title}</Link>
              </article>
            );
          })}
          <article className="Course" key={-999}>
            <Link to="/samplecourse">Sample Course</Link>
          </article>
        </section>
        <Switch>
          <Route exact path={"/samplecourse"} component={Course} />
          <Route path={this.props.match.url + "/:id"} component={Course} />
        </Switch>
      </div>
    );
  }
}

export default Courses;
