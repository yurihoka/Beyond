import { Meta } from "@storybook/react";
import { Form } from "@/components";

const meta: Meta<typeof Form> = {
  title: "Components/Common/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "サインイン、サインアップフォーム",
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
