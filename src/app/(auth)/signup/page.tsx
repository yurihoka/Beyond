"use client";

import type { NextPage } from "next";
import { Form } from "@/components";

const Page: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Form entry="signup" />
    </div>
  );
};

export default Page;
