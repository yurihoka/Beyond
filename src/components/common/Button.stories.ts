import { Meta } from "@storybook/react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";

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
    onClick: action("clicked"),
  },
};

export const AddExercises = {
  args: {
    entry: "addexercises",
    onClick: action("clicked"),
  },
};

export const CancelWorkout = {
  args: {
    entry: "cancelworkout",
    onClick: action("clicked"),
  },
};
