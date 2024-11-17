import { Meta } from "@storybook/react";
import WorkoutRecord from "./WorkoutRecord";

const meta: Meta<typeof WorkoutRecord> = {
  title: "Exercise/WorkoutRecord",
  component: WorkoutRecord,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "エクササイズの名前、回数、重さを1セットごとに記録する",
      },
    },
  },
  argTypes: {
    set: {
      description: "エクササイズごとのセット数",
    },
  },
};

export default meta;

export const SingleRecord = {
  args: {
    set: 1,
  },
};
