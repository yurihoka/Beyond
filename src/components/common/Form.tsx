import React from "react";
import Input from "./Input";
import Button from "./Button";
import { ButtonProps } from "./types";

const Form = ({ entry }: ButtonProps) => {
  return (
    <div>
      <Input variant="Email" />
      <Input variant="Password" />
      <Button entry={entry} />
    </div>
  );
};

export default Form;
