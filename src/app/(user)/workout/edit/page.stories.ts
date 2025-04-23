import { Meta } from "@storybook/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Pages/User/Workout/Edit",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "過去のトレーニング記録を更新/削除することができる",
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

export const Default = {};
