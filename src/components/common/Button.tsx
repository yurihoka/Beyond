import React from "react";

type Props = {
  variant: "Sign in" | "Sign up";
};

const Button = ({ variant }: Props) => {
  let buttonTxt;

  switch (variant) {
    case "Sign in":
      buttonTxt = "Sign in";
      break;
    case "Sign up":
      buttonTxt = "Sign up";
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
