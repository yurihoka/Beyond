import React from "react";
import Input from "./Input";
import Button from "./Button";
import { ButtonType } from "./types";

const Form = ({ entry }: ButtonType) => {
  return (
    <div>
      <Input variant="Email" />
      <Input variant="Password" />
      <Button entry={entry} />
    </div>
  );
};

export default Form;
