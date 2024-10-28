import { Meta } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
};

export default meta;

export const Signin = {
  args: {
    variant: "Sign in",
  },
};
export const Signup = {
  args: {
    variant: "Sign up",
  },
};
