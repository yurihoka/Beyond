import React from "react";
import Button from "../common/Button";
import { redirect } from "next/navigation";

// ダミーデータ
const exerciseNames = ["Squat", "Bench Press", "Chest Press", "Deadlift"];

const ExerciseList = () => {
  return (
    <div>
      <Button
        entry={"closeexerciselist"}
        onClick={() => {
          redirect("/workout");
        }}
      />
      <div className="flex justify-center items-center min-h-screen">
        <ul className="w-full max-w-xl flex flex-col">
          {exerciseNames.map((exerciseName, index) => (
            <li
              key={index}
              className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:mt-0"
            >
              <div className="relative flex items-start w-full">
                <div className="flex items-center h-5">
                  <input
                    id={`hs-list-group-item-checkbox-${index}`}
                    name={`hs-list-group-item-checkbox-${index}`}
                    type="checkbox"
                    className="border-gray-200 disabled:opacity-50"
                  ></input>
                </div>
                <label
                  htmlFor={`hs-list-group-item-checkbox-${index}`}
                  className="ms-3.5 block w-full text-sm text-gray-600"
                >
                  {exerciseName}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseList;
