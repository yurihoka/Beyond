import React from "react";

export type UserEmailType = {
  userEmail: string;
};

const Navbar = ({ userEmail }: UserEmailType) => {
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
            {userEmail}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
