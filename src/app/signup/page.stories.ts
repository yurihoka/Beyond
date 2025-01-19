import { Meta } from "@storybook/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Signup/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "サインアップ画面",
      },
    },
  },
};

export default meta;

export const Signup = {};
