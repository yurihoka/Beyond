import React from "react";
import { ButtonType } from "./types";

const Button = ({ entry }: ButtonType) => {
  let buttonTxt;

  switch (entry) {
    case "signin":
      buttonTxt = "Sign in";
      break;
    case "signup":
      buttonTxt = "Sign up";
      break;
    case "startworkout":
      buttonTxt = "Start Workout";
      break;
    case "finishworkout":
      buttonTxt = "Finish";
      break;
  }

  return (
    <div>
      <button className="bg-lime-200 hover:bg-lime-300 text-gray-700 py-2 px-8 rounded">
        {buttonTxt}
      </button>
    </div>
  );
};

export default Button;
