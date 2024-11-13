import React from "react";
import WorkoutRecord from "./WorkoutRecord";
import Button from "../common/Button";

const Exercise = () => {
  return (
    <div className="relative overflow-x-auto">
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
          <WorkoutRecord set={1} />
          <Button entry={"addset"} onClick={() => {}} />
        </tbody>
      </table>
    </div>
  );
};

export default Exercise;
