"use client";

import { Navbar, NoAuthUserRedirection } from "@/components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const email = localStorage.getItem("email");

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
