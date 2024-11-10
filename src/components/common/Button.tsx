import React from "react";
import { ButtonType } from "./types";

const Button = ({ entry }: ButtonType) => {
  const className =
    "bg-lime-200 hover:bg-lime-300 text-gray-700 py-2 px-8 rounded";

  return (
    <div>
      {entry === "signin" && <button className={className}>SIGN IN</button>}
      {entry === "signup" && <button className={className}>SIGN UP</button>}
      {entry === "startworkout" && (
        <button className={className}>START WORKOUT</button>
      )}
      {entry === "finishworkout" && (
        <button className={className}>FINISH WORKOUT</button>
      )}
    </div>
  );
};

export default Button;
