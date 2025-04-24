"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NoAuthUserRedirection = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [isAuthed, setIsAuthed] = useState(false);
  // const [isInvalidAccess, setIsInvalidAccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");

    setEmail(storedEmail || "");
  }, []);
  useEffect(() => {
    setIsAuthed(email !== null && email !== "");
    // setIsInvalidAccess(email === null || email === "");
  }, [email]);

  // if (isInvalidAccess) router.push("/signin");

  return isAuthed ? <>{children}</> : <></>;
};

export default NoAuthUserRedirection;
