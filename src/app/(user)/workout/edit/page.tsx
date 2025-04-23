"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Exercise, ExerciseListPopUp, History } from "@/components";
import { formatSubmitData } from "../page";

type WorkoutSet = { rep: number; weight: number };
type workoutHistory = {
  date: string;
  data: {
    name: string;
    sets: WorkoutSet[];
  }[];
};

const Page: NextPage = () => {
  const [workoutHistories, setWorkoutHistories] = useState<workoutHistory[]>(
    []
  );
  const [selectedHistory, setSelectedHistory] = useState<workoutHistory>();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [exercises, setExercises] = useState<string[]>([]);
  const email = localStorage.getItem("email");
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    const formattedData = formatSubmitData(selectedDate, data);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/histories`, {
      method: "PATCH",
      body: JSON.stringify({ email: email, workoutData: formattedData }),
    });

    if (res.ok) router.push("/dashboard");
  };

  useEffect(() => {
    const fetchWorkoutHistories = async () => {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_HOST
        }/api/histories?email=${localStorage.getItem("email")}`
      );
      const data = await res.json();
      const histories = data.map((history: workoutHistory) => history.data[0]);

      setWorkoutHistories(histories);
    };

    fetchWorkoutHistories();
  }, []);
  useEffect(() => {
    const history = workoutHistories.find((hstr) => hstr.date === selectedDate);

    setSelectedHistory(history);
  }, [selectedDate]);

  return (
    <div className="w-auto flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <label htmlFor="dates">日付</label>
        <select
          name="dates"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
          }}
        >
          {workoutHistories.map((history) => (
            <option value={history.date} key={history.date}>
              {history.date}
            </option>
          ))}
        </select>
      </div>
      <History sessions={selectedHistory ? [selectedHistory] : []} />
      {isPopupOpen && (
        <ExerciseListPopUp
          setExercises={setExercises}
          onCancelClick={() => setIsPopupOpen(false)}
          onAddClick={() => setIsPopupOpen(false)}
        />
      )}
      <Button
        entry="edit"
        onClick={() => {
          setIsEditMode((prev) => !prev);
        }}
      />
      {isEditMode && (
        <form
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex pt-10 justify-between items-center">
            <h1>{selectedDate}</h1>
            <Button entry="finishworkout" />
          </div>
          {exercises.map((exercise, index) => (
            <Exercise
              key={index}
              name={exercise}
              register={register}
              exercises={exercises}
              setExercises={setExercises}
            />
          ))}
          <Button entry="addexercises" onClick={() => setIsPopupOpen(true)} />
          <Button
            entry="cancelworkout"
            onClick={() => router.push("/dashboard")}
          />
        </form>
      )}
    </div>
  );
};

export default Page;
