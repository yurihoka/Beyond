"use client";

import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Button, Exercise } from "@/components";
import { useRouter } from "next/navigation";

const Page: NextPage = () => {
  const [currentDate, setCurrentDate] = useState<string>("");
  const router = useRouter();
  const onClick = () => router.push("/dashboard");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <div className="flex pt-10 justify-between justify-center items-center">
        <h1>{currentDate}</h1>
        <Button entry="finishworkout" />
      </div>
      <Exercise />
      <Button entry="addexercises" />
      <Button entry="cancelworkout" onClick={onClick} />
    </div>
  );
};

export default Page;
