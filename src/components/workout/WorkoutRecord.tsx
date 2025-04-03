import React from "react";
import { RecordInput } from "@/components";
import type { FieldValues, UseFormRegister } from "react-hook-form";

const WorkoutRecord = ({
  name,
  set,
  register,
}: {
  name: string;
  set: number;
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <tr className="bg-white">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {set}
      </th>
      <td className="px-6 py-4">
        <RecordInput field="weight" name={name} set={set} register={register} />
      </td>
      <td className="px-6 py-4">
        <RecordInput field="rep" name={name} set={set} register={register} />
      </td>
    </tr>
  );
};

export default WorkoutRecord;
