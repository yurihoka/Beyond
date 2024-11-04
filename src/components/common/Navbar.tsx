import React from "react";
import { InputType } from "storybook/internal/types";

const Navbar = ({ variant }: InputType) => {
  return (
    <div>
      <ul className="flex justify-between">
        <li className="mr-3">
          <a className="text-lime-300 hover:text-lime-500" href="#">
            HOME
          </a>
        </li>
        <li className="mr-3">
          <a className="text-lime-300 hover:text-lime-500" href="#">
            {variant}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
