import React from "react";
import CourseCard from "../components/CourseCard";

export default function Domain(props) {
  const { domain } = props.match.params;
  const { courses } = props.location.state;

  return (
    <div className="domain">
      <h1>{domain}</h1>
      <div className="domain-courses">
        {courses.map((course, i) => (
          <CourseCard course={course} key={`${course}${i}`} />
        ))}
      </div>
    </div>
  );
}
