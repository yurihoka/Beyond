import React from "react";
import { Input, Button } from "@/components";
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
