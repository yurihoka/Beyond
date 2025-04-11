import { Meta } from "@storybook/react";
import { History } from "@/components";

const meta: Meta<typeof History> = {
  title: "Components/Dashboard/History",
  component: History,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "ログインユーザのトレーニング履歴",
      },
    },
  },
  argTypes: {
    sessions: {
      description: "トレーニングセッションのリスト",
    },
  },
};

export default meta;

export const Default = {
  args: {
    sessions: [
      {
        date: "2025-02-05",
        data: [
          {
            name: "Bench Press",
            sets: [
              { reps: 10, weight: 50 },
              { reps: 10, weight: 60 },
              { reps: 10, weight: 70 },
            ],
          },
          {
            name: "Squat",
            sets: [
              { reps: 10, weight: 50 },
              { reps: 10, weight: 60 },
              { reps: 10, weight: 70 },
            ],
          },
        ],
      },
      {
        date: "2025-02-06",
        data: [
          {
            name: "Bench Press",
            sets: [
              { reps: 10, weight: 50 },
              { reps: 10, weight: 60 },
              { reps: 10, weight: 70 },
            ],
          },
          {
            name: "Squat",
            sets: [
              { reps: 10, weight: 50 },
              { reps: 10, weight: 60 },
              { reps: 10, weight: 70 },
            ],
          },
        ],
      },
    ],
  },
};

export const NoData = {
  args: {
    sessions: [],
  },
};
