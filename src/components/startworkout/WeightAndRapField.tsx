import React from "react";

const WeightAndRapField = ({ setDetails }: { setDetails: string }) => {
  return (
    <div>
      <label
        htmlFor={setDetails}
        className="block text-sm font-medium leading-6 text-gray-900"
      ></label>
      <div className="mt-1">
        <input
          id={setDetails}
          name={setDetails}
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

export default WeightAndRapField;
