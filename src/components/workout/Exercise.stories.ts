import { Meta } from "@storybook/react";
import { Exercise } from "@/components";

const meta: Meta<typeof Exercise> = {
  title: "Workout/Exercise",
  component: Exercise,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "エクササイズを記録",
      },
    },
  },
};

export default meta;

export const Default = {};

export const AddSet = {};
