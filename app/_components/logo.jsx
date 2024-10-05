import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      >
        <svg
          className="h-6 w-6 mr-1 text-blue-500 dark:text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm0 0v10m0-10H5.5m6.5 0h6.5"
          />
        </svg>
        <span className="font-bold dark:text-gray-300">My Blog</span>
      </Link>
    </div>
  );
};

export default Logo;
