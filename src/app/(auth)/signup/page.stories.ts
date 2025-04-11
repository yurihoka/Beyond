import { Meta } from "@storybook/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Pages/Auth/Signup",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "サインアップ画面",
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

export const Default = {};
