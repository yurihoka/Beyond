import React, { useState } from "react";
import WorkoutRecord from "./WorkoutRecord";
import Button from "../common/Button";
import ExerciseList from "./ExerciseList";

const Exercise = () => {
  const [sets, setSets] = useState([1]);
  const addSet = () => {
    setSets([...sets, sets.length + 1]);
  };

  return (
    <div className="relative overflow-x-auto m-6">
      <ExerciseList />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-s-lg">
              Set
            </th>
            <th scope="col" className="px-6 py-3">
              Kgs
            </th>
            <th scope="col" className="px-6 py-3 rounded-e-lg">
              Reps
            </th>
          </tr>
        </thead>
        <tbody>
          {sets.map((set, index) => (
            <WorkoutRecord key={index} set={set} />
          ))}
        </tbody>
      </table>
      <Button entry="addset" onClick={addSet} />
    </div>
  );
};

export default Exercise;
