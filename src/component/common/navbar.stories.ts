import { Meta } from "@storybook/react";
import Navbar from "./navbar";

const meta: Meta<typeof Navbar> = {
  title: "Common/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "ナビゲーションバーコンポーネント",
      },
    },
  },
  argTypes: {
    varient: {
      description: "ナビゲーションバーに表示させたいテキスト",
    },
  },
};
