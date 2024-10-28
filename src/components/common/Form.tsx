import React from "react";
import Input from "./Input";
import Button from "./Button";

type Props = {
  variant: "Sign in" | "Sign up";
};

const Form = ({ variant }: Props) => {
  return (
    <div>
      <Input variant="Email" />
      <Input variant="Password" />
      <Button variant={variant} />
    </div>
  );
};

export default Form;
