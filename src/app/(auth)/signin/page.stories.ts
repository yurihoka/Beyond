import { Meta } from "@storybook/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Login/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "サインイン画面",
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

export const Signin = {};
