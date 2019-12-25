import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link
      to={{
        pathname: `/course/${course.name}`,
        state: { course }
      }}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="course-card">
        <h3>{course.name}</h3>
      </div>
    </Link>
  );
}
