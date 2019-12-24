import React, { Component } from "react";

import CourseSection from "../components/CourseSection";

const domains = [
  {
    title: "Programming",
    courses: [
      {
        name: "JavaScript",
        description:
          "JavaScript is the programming language of HTML and the Web. This course will teach you JavaScript from basic to advanced."
      },
      {
        name: "Python",
        description:
          "Python is an interpreted, high-level, general-purpose programming language.. This course will teach you Python from basic to advanced."
      },
      {
        name: "C++",
        description:
          'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". This course will teach you C++ from basic to advanced.'
      }
    ]
  },
  {
    title: "Design",
    courses: [
      {
        name: "Adobe XD",
        description:
          "Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc. This course will teach you JavaScript from basic to advanced."
      },
      {
        name: "Figma",
        description:
          "A better way to design. Design, prototype, and gather feedback all in one place with Figma. This course will teach you Figma from basic to advanced."
      },
      {
        name: "Adobe Photoshop",
        description:
          "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. This course will teach you JavaScript from basic to advanced."
      }
    ]
  }
];

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domains
    };
  }

  render() {
    const { domains } = this.state;

    return (
      <div>
        <h1>Online Learning App</h1>
        {domains.map(domain => (
          <CourseSection title={domain.title} courses={domain.courses} />
        ))}
      </div>
    );
  }
}
