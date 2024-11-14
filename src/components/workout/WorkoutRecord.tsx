import React from "react";
import RecordInput from "./RecordInput";

const WorkoutRecord = ({ set }: { set: number }) => {
  return (
    <tr className="bg-white">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {set}
      </th>
      <td className="px-6 py-4">
        <RecordInput field="weight" />
      </td>
      <td className="px-6 py-4">
        <RecordInput field="rep" />
      </td>
    </tr>
  );
};

export default WorkoutRecord;
