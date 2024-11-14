import { Meta } from "@storybook/react";
import ExerciseList from "./ExerciseList";

const meta: Meta<typeof ExerciseList> = {
  title: "Workout/ExerciseList",
  component: ExerciseList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "エクササイズ一覧",
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
    name: "squat",
  },
};
