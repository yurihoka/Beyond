"use client";

import React, { useEffect, useState } from "react";
import { Navbar, Button, Exercise } from "@/components";
import { redirect } from "next/navigation";
import { ExerciseListPopUp } from "@/components";

const Workout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (
    <div className="relative">
      <ExerciseListPopUp
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onOk={() => setIsOpen(false)}
      />
      <div className="fixed top-0 left-0 w-full">
        <Navbar userEmail="test@xyz.com" />
      </div>
      <div className="flex pt-10 justify-between justify-center items-center">
        <h1>{currentDate}</h1>
        <Button entry="finishworkout" />
      </div>
      <Exercise />
      <Button entry="addexercises" onClick={() => setIsOpen(true)} />
      <Button
        entry="cancelworkout"
        onClick={() => {
          redirect(`/dashboard`);
        }}
      />
    </div>
  );
};

export default Workout;
