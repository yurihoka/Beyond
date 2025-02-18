import React from "react";
import { Button } from "@/components";
import { redirect } from "next/navigation";
import { log } from "console";

// ダミーデータ
const exerciseNames = ["Squat", "Bench Press", "Chest Press", "Deadlift"];

export type PopUpProps = {
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
};

const ExerciseListPopUp = (props: PopUpProps) => {
  return props.open ? (
    <>
      <div className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-48 p-5 flex flex-col items-start absolute z-20">
        <ul className="w-full max-w-xl mt-auto flex flex-col">
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
        <Button
          entry={"closeexerciselist"}
          onClick={() => {
            props.onOk();
          }}
        />
      </div>
      <div
        className="fixed bg-black bg-opacity-50 w-full h-full z-10"
        onClick={() => props.onCancel()}
      ></div>
    </>
  ) : (
    <></>
  );
};

export default ExerciseListPopUp;
