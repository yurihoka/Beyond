import { Meta } from "@storybook/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Login/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "サインイン/サインアップ画面",
      },
    },
  },
  argTypes: {
    entry: {
      description: "ボタンに表示させたいテキスト",
    },
  },
};

export default meta;

export const Signin = {
  args: {
    entry: "signin",
  },
};
