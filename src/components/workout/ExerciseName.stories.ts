import { Meta } from "@storybook/react";
import { ExerciseName } from "@/components";

const meta: Meta<typeof ExerciseName> = {
  title: "Components/Workout/ExerciseName",
  component: ExerciseName,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "エクササイズ名",
      },
    },
  },
  argTypes: {
    name: {
      description: "表示させたいエクササイズ名",
    },
  },
};

export default meta;

export const Squat = {
  args: {
    name: "Squat",
  },
};
