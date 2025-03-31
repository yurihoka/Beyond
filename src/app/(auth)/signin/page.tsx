"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Form } from "@/components";
import { validateLoginUser } from "@/utils/validateLoginUser";
import Link from "next/link";

const Page: NextPage = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const router = useRouter();
  const onClick = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    const res = await validateLoginUser(email, pswd);

    if (res?.isValidLoginUser) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", pswd);

      router.push("/dashboard");
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <Form
        entry="signin"
        onClick={onClick}
        email={email}
        setEmail={setEmail}
        pswd={pswd}
        setPswd={setPswd}
      />
      <Link href="/signup" className="text-lime-400 hover:text-lime-300">
        Sign Up
      </Link>
    </div>
  );
};

export default Page;
