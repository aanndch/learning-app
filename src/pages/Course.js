import React from "react";

export default function Course(props) {
  const { course } = props.location.state;

  return (
    <div className="course">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
    </div>
  );
}
