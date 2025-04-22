"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const fetchWorkoutHistories = async () => {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_HOST
        }/api/histories?email=${localStorage.getItem("email")}`
      );
      const data = await res.json();
      const histories = data[0].data;

      console.log(histories);

      setWorkoutHistories(histories);
    };

    fetchWorkoutHistories();
  }, []);

  return (
    <>
      <label htmlFor="dates">日付</label>
      <select name="dates">
        {workoutHistories.map((history) => (
          <option value={history.date} key={history.date}>
            {history.date}
          </option>
        ))}
      </select>
    </>
  );
};

export default Page;
