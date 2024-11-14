import { Meta } from "@storybook/react";
import Workout from "./Workout";

const meta: Meta<typeof Workout> = {
  title: "Workout/Workout",
  component: Workout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "エクササイズの記録や追加、ワークアウト終了・中断ができる",
      },
    },
  },
};

export default meta;

export const Default = {};
