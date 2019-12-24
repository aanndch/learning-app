import React from "react";

export default function CourseSection({ title, courses }) {
  return (
    <div className="course-section">
      <h2>{title}</h2>
      <div className="courses">
        {courses.map(course => (
          <div className="course-card">
            <h3>{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
