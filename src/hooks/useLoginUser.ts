import { useContext } from "react";
import {
  LoginUserContext,
  type LoginUserContextType,
} from "@/contexts/LoginUserContext";

export const useLoginUser = () => {
  const { loginUser, setLoginUser } =
    useContext<LoginUserContextType>(LoginUserContext);

  return { loginUser, setLoginUser };
};
