import { Meta } from "@storybook/react";
import WeightAndRapField from "./WeightAndRapField";

const meta: Meta<typeof WeightAndRapField> = {
  title: "StartWorkout/WeightAndRapField",
  component: WeightAndRapField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "エクササイズの重さとRep数用インプット",
      },
    },
  },
  argTypes: {
    setDetails: {
      description: "inputタグに紐付けたい項目名",
    },
  },
};

export default meta;

export const Weight = {
  args: {
    setDetails: "weight",
  },
};

export const Rep = {
  args: {
    setDetails: "rap",
  },
};
