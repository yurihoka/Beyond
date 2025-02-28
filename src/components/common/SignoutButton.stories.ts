import { Meta } from "@storybook/react";
import { SignoutButton } from "@/components";

const meta: Meta<typeof SignoutButton> = {
  title: "Common/SignoutButton",
  component: SignoutButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "ユーザーがサインアウトする際に使用するサインアウトボタン",
      },
    },
  },
};

export default meta;

export const Default = {};
