import { Meta } from "@storybook/react";
import ExerciseListPopUp from "./ExerciseListPopup";

const meta: Meta<typeof ExerciseListPopUp> = {
  title: "Components/Workout/ExerciseListPopUp",
  component: ExerciseListPopUp,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "エクササイズ一覧",
      },
    },
  },
};

export default meta;

export const Default = {};
