import React from "react";

type ExerciseNameProps = {
  name: string;
};

const ExerciseName = ({ name }: ExerciseNameProps) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">{name}</h1>
    </div>
  );
};

export default ExerciseName;
