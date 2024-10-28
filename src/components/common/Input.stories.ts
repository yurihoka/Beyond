import { Meta } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Common/Input",
  component: Input,
};

export default meta;

export const EmailInputForm = {
  args: {
    variant: "Email",
  },
};

export const PasswordInputForm = {
  args: {
    variant: "Password",
  },
};
