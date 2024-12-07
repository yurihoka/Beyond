import type { NextPage } from "next";
import Form from "@/components/common/Form";
import { ButtonProps } from "@/components/common/types";

const Page: NextPage<ButtonProps> = ({ entry }) => {
  return (
    <>
      <Form entry={entry} />
    </>
  );
};

export default Page;
