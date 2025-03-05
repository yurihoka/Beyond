"use client";

import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Form } from "@/components";

const Page: NextPage = () => {
  const router = useRouter();
  const onClick = () => router.push("/dashboard");

  return (
    <div className="flex items-center justify-center h-screen">
      <Form entry="signup" onClick={onClick} />
    </div>
  );
};

export default Page;
