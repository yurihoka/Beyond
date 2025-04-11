import { Meta } from "@storybook/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Pages/User/Dashboard",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "ダッシュボード",
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    entry: {
      description: "ボタンに表示させたいテキスト",
    },
  },
};

export default meta;

export const Default = {
  args: {
    entry: "Dashboard",
  },
};
