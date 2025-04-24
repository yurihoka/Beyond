import { Meta } from "@storybook/react";
import { Input } from "@/components";

const meta: Meta<typeof Input> = {
  title: "Components/Common/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "ログイン/サインアップフォームのEmail/Password用インプット",
      },
    },
  },
  argTypes: {
    type: {
      description: "インプットしてほしい内容を表示するテキスト",
    },
  },
};

export default meta;

export const Email = {
  args: {
    type: "Email",
  },
};

export const Password = {
  args: {
    type: "Password",
  },
};
