import React from "react";
import logo from "../assets/n-logo.png";
import { FaGithub } from "react-icons/fa";
import leetcode from "../assets/leetcode.png";
import linkedin from "../assets/linkedin.png";
import codechef from "../assets/codechef.png";
import codeforces from "../assets/codeforces.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 h-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a
          href="https://www.linkedin.com/in/nishant-khandelwal-168610288/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-8 h-8" src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://leetcode.com/u/Nishant_Khandelwal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-8 h-8" src={leetcode} alt="leetcode" />
        </a>
        <a
          href="https://www.codechef.com/users/nishant003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-8 h-8" src={codechef} alt="codechef" />
        </a>
        <a
          href="https://codeforces.com/profile/nishantk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-8 h-8" src={codeforces} alt="codeforces" />
        </a>
        <a
          href="https://github.com/nishantkhandelwal26"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
