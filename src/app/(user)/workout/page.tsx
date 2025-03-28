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
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const onClick = () => router.push("/dashboard");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (
    <>
      {isOpen && (
        <ExerciseListPopUp
          onCancel={() => setIsOpen(false)}
          onOk={() => setIsOpen(false)}
        />
      )}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <div className="flex pt-10 justify-between justify-center items-center">
          <h1>{currentDate}</h1>
          <Button entry="finishworkout" />
        </div>
        <Exercise />
        <Button entry="addexercises" onClick={() => setIsOpen(true)} />
        <Button entry="cancelworkout" onClick={onClick} />
      </div>
    </>
  );
};

export default Page;
