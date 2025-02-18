"use client";

import type { NextPage } from "next";
import { Button, Navbar } from "@/components";
import { useRouter } from "next/navigation";

const Page: NextPage = () => {
  const router = useRouter();
  const onClick = () => router.push("/workout");

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full">
        <Navbar userEmail="test@xyz.com" />
      </div>
      <div className="flex flex-col items-center justify-center pt-16">
        <Button entry="startworkout" onClick={onClick} />
        <h1 className="mt-4 bg-gray-200 px-20 py-10">HISTORY</h1>
      </div>
    </div>
  );
};

export default Page;
