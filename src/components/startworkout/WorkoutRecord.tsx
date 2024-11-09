import React from "react";
import RecordInput from "./RecordInput";

const WorkoutRecord = ({ set }: { set: number }) => {
  return (
    <div>
      <div className="flex items-center gap-x-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-900 mt-1">{set}</p>
        </div>
        <RecordInput field="weight" />
        <RecordInput field="rep" />
      </div>
    </div>
  );
};

export default WorkoutRecord;
