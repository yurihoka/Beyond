import React from "react";

type ExerciseNameProps = {
  name: string;
};

const ExerciseName = ({ name }: ExerciseNameProps) => {
  let exerciseName;

  switch (name) {
    case "Squat":
      exerciseName = "Squat";
      break;
  }

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default ExerciseName;
