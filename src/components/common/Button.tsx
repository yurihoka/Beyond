import React from "react";
import { ButtonType } from "./types";

const Button = ({ entry }: ButtonType) => {
  return (
    <div>
      <button className="bg-lime-200 hover:bg-lime-300 text-gray-700 py-2 px-8 rounded">
        {entry}
      </button>
    </div>
  );
};

export default Button;
