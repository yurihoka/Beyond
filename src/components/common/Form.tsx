"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input, Button } from "@/components";
import { validateLoginUser } from "@/utils/validateLoginUser";
import { validateSignupUser } from "@/utils/validateSignupUser";

type FormProps = {
  entry: "signin" | "signup";
};

const Form = ({ entry }: FormProps) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = (data: any) => {
    const { email, password } = data;
    const authorizeUser = async () => {
      const res =
        entry === "signin"
          ? await validateLoginUser(email, password)
          : await validateSignupUser(email, password);

      if (res?.isSucceeded) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        router.push("/dashboard");
        return;
      }
    };

    authorizeUser();
  };

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type="email" register={register} />
      <Input type="password" register={register} />
      <Button entry={entry} />
    </form>
  );
};

export default Form;
