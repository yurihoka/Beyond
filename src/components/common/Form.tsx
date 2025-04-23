"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input, Button } from "@/components";
import { validateLoginUser } from "@/utils/validateLoginUser";
import { validateSignupUser } from "@/utils/validateSignupUser";

type FormProps = {
  entry: "signin" | "signup";
};

const Form = ({ entry }: FormProps) => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      setErrorMessage(res?.msg as string);
    };

    authorizeUser();
  };

  useEffect(() => {
    const msg = errors?.email?.message || errors?.password?.message;

    setErrorMessage(msg as string);
  }, [errors]);

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type="email" register={register} />
      <Input type="password" register={register} />
      <div className="flex flex-col items-center justify-center gap-4">
        <Button entry={entry} />
        <p className="text-rose-400">{errorMessage}</p>
      </div>
    </form>
  );
};

export default Form;
