"use client";

import React, { useState } from "react";
import { WorkoutRecord, Button } from "@/components";
import type { FieldValues, UseFormRegister } from "react-hook-form";

const Exercise = ({
  name,
  register,
  exercises,
  setExercises,
}: {
  name: string;
  register: UseFormRegister<FieldValues>;
  exercises: string[];
  setExercises: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [sets, setSets] = useState([1]);
  const addSet = () => {
    setSets([...sets, sets.length + 1]);
  };

  return (
    <div className="relative overflow-x-auto m-6">
      <div className="flex justify-between">
        <h2 className="text-lg">{name}</h2>
        <Button
          entry="closeexerciselist"
          onClick={() => {
            const updatedExercises = exercises.filter(
              (exercise) => exercise !== name
            );

            setExercises(updatedExercises);
          }}
        />
      </div>
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
            <WorkoutRecord
              key={index}
              name={name}
              set={set}
              register={register}
            />
          ))}
        </tbody>
      </table>
      <Button entry="addset" onClick={addSet} />
    </div>
  );
};

export default Exercise;
