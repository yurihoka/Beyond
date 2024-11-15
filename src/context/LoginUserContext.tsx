import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useState,
} from "react";

type LoginUser = { email: string; password: string } | null;
type LoginUserContextType =
  | [LoginUser, Dispatch<SetStateAction<LoginUser>>]
  | null;

const LoginUserContext = createContext<LoginUserContextType>(null);
export const LoginUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loginUser, setLoginUser] = useState<LoginUser>(null);

  return (
    <LoginUserContext.Provider value={[loginUser, setLoginUser]}>
      {children}
    </LoginUserContext.Provider>
  );
};

export const useLoginUser = () => {
  const [loginUser, setLoginUser] = useContext<LoginUserContextType>(
    LoginUserContext
  ) ?? [null, () => {}];

  return [loginUser, setLoginUser];
};
