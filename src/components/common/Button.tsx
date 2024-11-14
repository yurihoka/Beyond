import React from "react";
import { ButtonType } from "./types";

const Button = ({ entry, onClick }: ButtonType) => {
  const className =
    "w-full bg-lime-300 hover:bg-lime-200 text-gray-700 py-2 px-8 rounded";

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
      {entry === "addset" && (
        <button className={className} onClick={onClick}>
          ADD SET
        </button>
      )}
      {entry === "addexercises" && (
        <button className={className}>ADD EXERCISES</button>
      )}
      {entry === "cancelworkout" && (
        <button className={className}>CANCEL WORKOUT</button>
      )}
    </div>
  );
};

export default Button;
