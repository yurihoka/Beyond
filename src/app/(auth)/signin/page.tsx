"use client";

import type { NextPage } from "next";
import { Form } from "@/components";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <Form entry="signin" />
      <Link href="/signup" className="text-lime-400 hover:text-lime-300">
        Sign Up
      </Link>
    </div>
  );
};

export default Page;
