import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

export default function CourseSection({ title, courses }) {
  return (
    <div className="course-section">
      <Link
        to={{
          pathname: `/domain/${title}`,
          state: { courses }
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <h2>{title}</h2>
      </Link>
      <div className="courses">
        {courses.map((course, i) => (
          <CourseCard course={course} key={`${course}${i}`} />
        ))}
      </div>
    </div>
  );
}
