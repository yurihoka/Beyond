import { Meta } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Common/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "ナビゲーションバー",
      },
    },
  },
  argTypes: {
    variant: {
      description: "ナビゲーションバーに表示させたいユーザーのメールアドレス",
    },
  },
};

export default meta;

export const Email = {
  args: {
    variant: "test@xyz.com",
  },
};
