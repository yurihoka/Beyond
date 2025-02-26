import React from "react";
import { ButtonProps } from "./types";

const Button = ({ entry, onClick }: ButtonProps) => {
  const className =
    "w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-lime-400 mt-2 hover:bg-lime-300 focus:outline-none";
  return (
    <div>
      <div className="w-full flex justify-center">
        {entry === "signin" && (
          <button className={className} onClick={onClick}>
            SIGN IN
          </button>
        )}
        {entry === "signup" && (
          <button className={className} onClick={onClick}>
            SIGN UP
          </button>
        )}
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
          <button className={className} onClick={onClick}>
            ADD EXERCISES
          </button>
        )}
        {entry === "cancelworkout" && (
          <button className={`${className} bg-gray-300`} onClick={onClick}>
            CANCEL WORKOUT
          </button>
        )}
        {entry === "closeexerciselist" && (
          <button className={className} onClick={onClick}>
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
