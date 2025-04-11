import { Meta } from "@storybook/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Pages/User/Workout",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "エクササイズの記録や追加、ワークアウト終了・中断ができる",
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

export const Default = {};
