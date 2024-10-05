import Link from "next/link";
import React from "react";
import { LightDark } from "./light-dark"; // Assuming this handles light/dark mode switching

const Navigatons = ({ className = "" }) => {
  return (
    <div className={className}>
      <Link
        href="/"
        className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition duration-300"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition duration-300"
      >
        About
      </Link>
      <Link
        href="/blogs"
        className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition duration-300"
      >
        Blog
      </Link>
      <Link
        href="/contact"
        className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition duration-300"
      >
        Contact
      </Link>
      {/* LightDark component, assuming it handles theme toggling */}
      <LightDark />
    </div>
  );
};

export default Navigatons;
