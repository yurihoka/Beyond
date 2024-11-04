import { Meta } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "ログイン/サインアップフォーム用ボタン",
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

export const Signin = {
  args: {
    entry: "signin",
  },
};
export const Signup = {
  args: {
    entry: "signup",
  },
};
