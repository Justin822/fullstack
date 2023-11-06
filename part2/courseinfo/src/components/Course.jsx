const Course = ({ course }) => {
  const initialTotal = 0;

  const courses = course.map((course) => (
    <div key={course.id}>
      <h2>{course.name}</h2>
      {course.parts.map((course) => (
        <p key={course.id}>
          {course.name} {course.exercises}
        </p>
      ))}
      <strong>
        total of{" "}
        {course.parts.reduce(
          (sum, { exercises }) => sum + exercises,
          initialTotal
        )}{" "}
        exercises
      </strong>
    </div>
  ));

  //   const totals = course.parts.reduce(
  //     (sum, { exercises }) => sum + exercises,
  //     initialValue
  //   );

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses}
      {/* <strong>total of {totals} exercises </strong> */}
    </div>
  );
};

export default Course;
