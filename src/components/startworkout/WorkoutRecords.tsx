import React from "react";
import WeightAndRapField from "./WeightAndRapField";

const WorkoutRecords = ({ setCount }: { setCount: number }) => {
  return (
    <div>
      <div className="flex items-center gap-x-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-900 mt-1">{setCount}</p>
        </div>
        <WeightAndRapField setDetails="weight" />
        <WeightAndRapField setDetails="rap" />
      </div>
    </div>
  );
};

export default WorkoutRecords;
