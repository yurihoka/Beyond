"use client";

import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";

type LoginUser = { email: string; password: string } | null;
export type LoginUserContextType = {
  loginUser: LoginUser;
  setLoginUser: Dispatch<SetStateAction<LoginUser>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({
  loginUser: null,
  setLoginUser: () => {},
});
export const LoginUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loginUser, setLoginUser] = useState<LoginUser>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
