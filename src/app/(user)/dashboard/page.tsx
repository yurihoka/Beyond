"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Button, Navbar, History } from "@/components";
import { useRouter } from "next/navigation";

const Page: NextPage = () => {
  const [email, setEmail] = useState("");
  const [sessions, setSessions] = useState([]);

  const router = useRouter();
  const onClick = () => router.push("/workout");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const updateUserHistory = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/histories?email=${storedEmail}`
      );
      const data = await res.json();
      const sessionList = data.map((session: any) => session.data[0]);

      setSessions(sessionList);
    };

    setEmail(storedEmail ?? "Guest");
    updateUserHistory();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <div className="flex gap-4">
        <Button entry="startworkout" onClick={onClick} />
        <Button entry="edit" onClick={() => router.push("/workout/edit")} />
      </div>
      <div className="w-full min-h-64 flex justify-center items-center">
        <History sessions={sessions} />
      </div>
    </div>
  );
};

export default Page;
