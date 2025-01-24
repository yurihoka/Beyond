import React from "react";
import { Input, Button } from "@/components";
import { ButtonProps } from "./types";

const Form = ({ entry, onClick }: ButtonProps) => {
  return (
    <div>
      <Input variant="Email" />
      <Input variant="Password" />
      <Button entry={entry} onClick={onClick} />
    </div>
  );
};

export default Form;
