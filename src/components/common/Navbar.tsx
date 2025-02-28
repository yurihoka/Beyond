import React from "react";
import { SignoutButton } from "@/components";

export type NavbarProps = {
  userEmail: string;
};

const Navbar = ({ userEmail }: NavbarProps) => {
  return (
    <div>
      <ul className="flex justify-between items-center bg-gray-200 px-10">
        <li className="mr-3">
          <a className="text-gray-500 hover:text-gray-700" href="#">
            HOME
          </a>
        </li>
        <li className="mr-3 flex items-center gap-4">
          <SignoutButton />
          <a className="text-gray-500 hover:text-gray-700" href="#">
            {userEmail}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
