"use client";

import { NoAuthUserRedirection } from "@/components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <NoAuthUserRedirection>{children}</NoAuthUserRedirection>;
};
export default Layout;
