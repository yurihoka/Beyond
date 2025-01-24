"use client";

import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Form } from "@/components";

const Page: NextPage = () => {
  const router = useRouter();
  const onClick = () => router.push("/dashboard");

  return (
    <>
      <Form entry="signin" onClick={onClick} />
    </>
  );
};

export default Page;
