"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Button, Navbar, History } from "@/components";
import { useRouter } from "next/navigation";

const Page: NextPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const onClick = () => router.push("/workout");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");

    setEmail(storedEmail ?? "Guest");
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full">
        <Navbar userEmail={email} />
      </div>
      <div className="flex flex-col items-center justify-center pt-16">
        <Button entry="startworkout" onClick={onClick} />
        <div className="w-full min-h-64 flex justify-center items-center">
          <History sessions={[]} />
        </div>
      </div>
    </div>
  );
};

export default Page;
