"use client";

import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Button, Exercise, ExerciseListPopUp } from "@/components";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Page: NextPage = () => {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [exercises, setExercises] = useState<string[]>([]);
  const email = localStorage.getItem("email");
  const router = useRouter();
  const onClick = () => router.push("/dashboard");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const formattedData = formatSubmitData(currentDate, data);
    const res = fetch(`${process.env.NEXT_PUBLIC_HOST}/api/histories`, {
      method: "POST",
      body: JSON.stringify({ email: email, workoutData: formattedData }),
    });
  };

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (
    <>
      {isPopupOpen && (
        <ExerciseListPopUp
          setExercises={setExercises}
          onCancelClick={() => setIsPopupOpen(false)}
          onAddClick={() => setIsPopupOpen(false)}
        />
      )}
      <form
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex pt-10 justify-between items-center">
          <h1>{currentDate}</h1>
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
        <Button entry="cancelworkout" onClick={onClick} />
      </form>
    </>
  );
};

export default Page;

export const formatSubmitData = (date: any, data: any) => {
  const formattedData: any = [{ date: date, data: [] }];
  const exerciseNames = Object.keys(data);

  exerciseNames.forEach((name: string) => {
    const sets = data[name];

    formattedData[0].data.push({ name, sets });
  });

  return formattedData;
};
