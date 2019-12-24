import React from "react";

export default function CourseSection({ title, courses }) {
  return (
    <div>
      <h1>{title}</h1>
      {courses.map(course => (
        <h3>{course.name}</h3>
      ))}
    </div>
  );
}
