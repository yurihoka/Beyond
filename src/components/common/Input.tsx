import React from "react";

type InputType = {
  variant: "Email" | "Password";
};

const Input = ({ variant }: InputType) => {
  let inputTxt;

  switch (variant) {
    case "Email":
      inputTxt = "Email";
      break;
    case "Password":
      inputTxt = "Password";
      break;
  }

  return (
    <div>
      <label
        htmlFor={inputTxt}
        className="block text-sm font-medium leading-6 text-gray-900"
      ></label>
      <div className="mt-2">
        <input
          id={inputTxt}
          name={inputTxt}
          type={inputTxt}
          placeholder={inputTxt}
          required
          autoComplete={inputTxt}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
