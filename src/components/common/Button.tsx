import React from "react";
import { ButtonProps } from "./types";

const Button = ({ entry, onClick }: ButtonProps) => {
  const className =
    "w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-lime-400 mt-2 hover:bg-lime-300 focus:outline-none";
  return (
    <div>
      <div className="w-full flex justify-center">
        {entry === "signin" && <button className={className}>SIGN IN</button>}
        {entry === "signup" && <button className={className}>SIGN UP</button>}
        {entry === "startworkout" && (
          <button type="button" className={className} onClick={onClick}>
            START WORKOUT
          </button>
        )}
        {entry === "finishworkout" && (
          <button className={className}>FINISH WORKOUT</button>
        )}
        {entry === "addset" && (
          <button type="button" className={className} onClick={onClick}>
            ADD SET
          </button>
        )}
        {entry === "addexercises" && (
          <button type="button" className={className} onClick={onClick}>
            ADD EXERCISES
          </button>
        )}
        {entry === "cancelworkout" && (
          <button
            type="button"
            className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-400 mt-2 hover:bg-gray-300 focus:outline-none"
            onClick={onClick}
          >
            CANCEL WORKOUT
          </button>
        )}
        {entry === "closeexerciselist" && (
          <button type="button" className={className} onClick={onClick}>
            X
          </button>
        )}
        {entry === "edit" && (
          <button type="button" className={className} onClick={onClick}>
            EDIT
          </button>
        )}
        {entry === "delete" && (
          <button
            type="button"
            className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-rose-400 mt-2 hover:bg-rose-300 focus:outline-none"
            onClick={onClick}
          >
            DELETE
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
