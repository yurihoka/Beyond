import { Meta } from "@storybook/react";
import Form from "./Form";
import { parseArgs } from "util";

const meta: Meta<typeof Form> = {
  title: "Common/Form",
  component: Form,
};

export default meta;

export const SignInForm = {
  args: {
    variant: "Sign in",
  },
};
export const SignUpForm = {
  args: {
    variant: "Sign up",
  },
};
