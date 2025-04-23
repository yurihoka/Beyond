"use client";

import { useEffect, useState } from "react";
import { Navbar, NoAuthUserRedirection } from "@/components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmail(localStorage?.getItem("email") ?? "");
    }
  }, []);

  return (
    <NoAuthUserRedirection>
      <div className="relative">
        <div className="fixed top-0 left-0 w-full">
          <Navbar userEmail={email as string} />
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </NoAuthUserRedirection>
  );
};
export default Layout;
