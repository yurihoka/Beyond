import { Meta } from "@storybook/react";
import WorkoutRecords from "./WorkoutRecords";

const meta: Meta<typeof WorkoutRecords> = {
  title: "StartWorkout/WorkoutRecords",
  component: WorkoutRecords,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "エクササイズの名前、回数、重さを1セットごとに記録する",
      },
    },
  },
  argTypes: {
    setCount: {
      description: "エクササイズごとのセット数",
    },
  },
};

export default meta;

export const SingleRecord = {
  args: {
    setCount: 1,
  },
};
