import React, { Component } from "react";

class Course extends Component {
  render() {
    console.log("Course here...", this.props);
    return (
      <div className="container-inner">
        <h1>{this.props.title}</h1>
        <p style={{ color: "white" }}>
          You selected the Course with ID: {this.props.match.params.id}
        </p>
      </div>
    );
  }
}

export default Course;
