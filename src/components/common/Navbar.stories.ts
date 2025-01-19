import { Meta } from "@storybook/react";
import { Navbar } from "@/components";

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
    userEmail: {
      description: "ナビゲーションバーに表示させたいユーザーのメールアドレス",
    },
  },
};

export default meta;

export const NavigationBar = {
  args: {
    userEmail: "test@xyz.com",
  },
};
