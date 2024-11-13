import { Meta } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "ログイン/サインアップフォーム、スタートワークアウト、フィニッシュワークアウト用ボタン",
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

export const Signin = {
  args: {
    entry: "signin",
  },
};

export const Signup = {
  args: {
    entry: "signup",
  },
};

export const StartWorkout = {
  args: {
    entry: "startworkout",
  },
};

export const FinishWorkout = {
  args: {
    entry: "finishworkout",
  },
};

export const AddSet = {
  args: {
    entry: "addset",
  },
};

export const AddExercises = {
  args: {
    entry: "addexercises",
  },
};

export const CancelWorkout = {
  args: {
    entry: "cancelworkout",
  },
};
