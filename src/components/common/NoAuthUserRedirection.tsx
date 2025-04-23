"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NoAuthUserRedirection = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState("");
  const isAuthed = email !== null && email !== "";
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");

    setEmail(storedEmail || "");
  }, []);

  if (isAuthed) {
    return <>{children}</>;
  }

  router.push("/signin");
  return;
};

export default NoAuthUserRedirection;
