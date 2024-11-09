import React from "react";

export type UserEmailType = {
  userEmail: string;
};

const Navbar = ({ userEmail }: UserEmailType) => {
  return (
    <div>
      <ul className="flex justify-between">
        <li className="mr-3">
          <a className="text-gray-500 hover:text-gray-700" href="#">
            HOME
          </a>
        </li>
        <li className="mr-3">
          <a className="text-gray-500 hover:text-gray-700" href="#">
            {userEmail}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
