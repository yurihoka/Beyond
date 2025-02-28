import React from "react";
import { Input, Button } from "@/components";

type FormProps = {
  entry:
    | "signin"
    | "signup"
    | "startworkout"
    | "finishworkout"
    | "addset"
    | "addexercises"
    | "cancelworkout"
    | "closeexerciselist";
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  pswd: string;
  setPswd: React.Dispatch<React.SetStateAction<string>>;
};

const Form = ({
  entry,
  onClick,
  email,
  setEmail,
  pswd,
  setPswd,
}: FormProps) => {
  return (
    <div>
      <Input variant="Email" value={email} setValue={setEmail} />
      <Input variant="Password" value={pswd} setValue={setPswd} />
      <Button entry={entry} onClick={onClick} />
    </div>
  );
};

export default Form;
