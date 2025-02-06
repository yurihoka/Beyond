import { Meta } from "@storybook/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Dashboard/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "ダッシュボード",
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

export const Default = {
  args: {
    entry: "Dashboard",
  },
};
