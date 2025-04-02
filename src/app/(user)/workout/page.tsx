"use client";

import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import {
  Button,
  Exercise,
  ExerciseListPopUp,
  NoAuthUserRedirection,
} from "@/components";
import { useRouter } from "next/navigation";

const Page: NextPage = () => {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [exercises, setExercises] = useState<string[]>([]);
  const router = useRouter();
  const onClick = () => router.push("/dashboard");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (
    <>
      {isPopupOpen && (
        <ExerciseListPopUp
          onCancel={() => setIsPopupOpen(false)}
          onOk={() => setIsPopupOpen(false)}
        />
      )}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <div className="flex pt-10 justify-between items-center">
          <h1>{currentDate}</h1>
          <Button entry="finishworkout" />
        </div>
        {exercises.map((exercise, index) => (
          <Exercise key={index} name={exercise} />
        ))}
        <Button entry="addexercises" onClick={() => setIsPopupOpen(true)} />
        <Button entry="cancelworkout" onClick={onClick} />
      </div>
    </>
  );
};

export default Page;
