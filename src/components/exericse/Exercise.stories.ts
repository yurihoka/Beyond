import { Meta } from "@storybook/react";
import Exercise from "./Exercise";
import { parseArgs } from "util";

const meta: Meta<typeof Exercise> = {
  title: "Exercise/Exercise",
  component: Exercise,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "エクササイズを記録",
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
