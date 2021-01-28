import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

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
    console.log("Courses props: ", this.props);
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <article className="Course" key={course.id}>
                <Link to={this.props.match.url + "/" + course.id}>
                  {course.title}
                </Link>
              </article>
            );
          })}
        </section>
        <Route
          path={this.props.match.url + "/:id"}
          render={(props) => (
            <Course
              {...props}
              title={
                this.state.courses[Number(props.match.params.id) - 1].title
              }
            />
          )}
        />
      </div>
    );
  }
}

export default Courses;
