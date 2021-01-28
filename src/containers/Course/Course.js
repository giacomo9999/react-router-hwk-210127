import React, { Component } from "react";

class Course extends Component {
  render() {
    console.log("Course here...", this.props);
    return (
      <div className="container-inner">
        <h1>_COURSE_TITLE_</h1>
        <p>You selected the Course with ID: _ID_</p>
        <p>{this.props.match.url}</p>
      </div>
    );
  }
}

export default Course;
