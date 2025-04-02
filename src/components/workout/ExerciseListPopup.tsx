"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components";

export type PopUpProps = {
  setExercises: React.Dispatch<React.SetStateAction<string[]>>;
  onCancelClick: () => void;
  onAddClick: () => void;
};

const ExerciseListPopUp = ({
  setExercises,
  onCancelClick,
  onAddClick,
}: PopUpProps) => {
  const [checkedExercises, setCheckedExercises] = useState<string[]>([]);
  const [exerciseList, setExerciseList] = useState<string[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const res = await fetch("http://localhost:3000/api/exercises");
      const fetched = await res.json();
      const exercises = fetched.map(
        (exercise: { name: string }) => exercise.name
      );

      setExerciseList(exercises);
    };
    fetchExercises();
  }, []);

  return (
    <>
      <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-48 p-5 flex flex-col items-start absolute z-20">
        <ul className="w-full max-w-xl mt-auto flex flex-col">
          {exerciseList.map((exercise, index) => (
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
                    onChange={(e) => {
                      const isChecked = e.target.checked;

                      if (isChecked) {
                        if (checkedExercises.includes(exercise)) {
                          return;
                        }
                        setCheckedExercises([...checkedExercises, exercise]);
                      }
                      if (checkedExercises.includes(exercise)) {
                        setCheckedExercises(
                          checkedExercises.filter(
                            (checked) => checked !== exercise
                          )
                        );
                      }
                    }}
                  ></input>
                </div>
                <label
                  htmlFor={`hs-list-group-item-checkbox-${index}`}
                  className="ms-3.5 block w-full text-sm text-gray-600"
                >
                  {exercise}
                </label>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between w-full">
          <Button
            entry={"closeexerciselist"}
            onClick={() => {
              onAddClick();
            }}
          />
          <button
            className="py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-lime-400 mt-2 hover:bg-lime-300 focus:outline-none"
            type="button"
            onClick={() => {
              setExercises((prev) => {
                const newExercises = checkedExercises.filter(
                  (checked) => !prev.includes(checked)
                );
                return [...prev, ...newExercises];
              });
            }}
          >
            ADD
          </button>
        </div>
      </div>
      <div
        className="fixed bg-black bg-opacity-50 w-full h-full z-10"
        onClick={() => onCancelClick()}
      ></div>
    </>
  );
};

export default ExerciseListPopUp;
