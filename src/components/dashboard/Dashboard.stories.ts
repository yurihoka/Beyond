import { Meta } from "@storybook/react";
import { Dashboard } from "@/components";
import { parseArgs } from "util";

const meta: Meta<typeof Dashboard> = {
  title: "Dashboard/Dashboard",
  component: Dashboard,
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
