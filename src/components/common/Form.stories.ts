import { Meta } from "@storybook/react";
import Form from "./Form";
import { parseArgs } from "util";

const meta: Meta<typeof Form> = {
  title: "Common/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "サインイン、サインアップコンポーネント",
      },
    },
  },
  argTypes: {
    entry: {
      description: "ボタンに表示させたいテキスト",
    },
  },
};

export default meta;

export const SignIn = {
  args: {
    entry: "signin",
  },
};
export const SignUp = {
  args: {
    entry: "signup",
  },
};
