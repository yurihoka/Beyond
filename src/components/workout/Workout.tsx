import React, { useEffect, useState } from "react";
import { Navbar, Button, Exercise } from "@/components";
import { redirect } from "next/navigation";

const Workout = () => {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full">
        <Navbar userEmail="test@xyz.com" />
      </div>
      <div className="flex flex-col pt-16">
        <h1>{currentDate}</h1>
        <Button entry="finishworkout" />
      </div>
      <Exercise />
      <Button entry="addexercises" />
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
