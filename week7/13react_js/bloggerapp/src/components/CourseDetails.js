import React from 'react';

const CourseDetails = ({ courses }) => {
  return (
    <div className="mystyle1">
      <h1>Course Details</h1>
      {courses.map((course, index) =>
        course.name === 'React' ? ( // Conditional rendering
          <div key={index}>
            <h2>{course.name}</h2>
            <p>{course.date}</p>
          </div>
        ) : null // render nothing if condition not met
      )}
    </div>
  );
};

export default CourseDetails;
