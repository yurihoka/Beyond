import { ReactNode } from "react";
import { useRouter } from "next/navigation";

const NoAuthUserRedirection = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const email = localStorage.getItem("email");
  const isAuthed = email !== null && email !== "";

  if (isAuthed) {
    return <>{children}</>;
  }

  router.push("/signin");
  return;
};

export default NoAuthUserRedirection;
