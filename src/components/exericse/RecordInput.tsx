import React from "react";

type RecordInputProps = {
  field: "weight" | "rep";
};

const RecordInput = ({ field }: RecordInputProps) => {
  return (
    <div>
      <label
        htmlFor={field}
        className="block text-sm font-medium leading-6 text-gray-900"
      ></label>
      <div className="mt-1">
        <input
          id={field}
          name={field}
          type="number"
          placeholder="0"
          required
          autoComplete="off"
          className="w-20 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default RecordInput;
