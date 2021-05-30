import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlashLogo from "./FlashLogo";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-gradient-to-br from-red-50 to-gray-100 px-1 shadow-sm">
      <nav className="max-w-6xl mx-auto p-3 flex items-center justify-between">
        <div>
          <Link to="/" className="flex items-center">
            <FlashLogo />
            <h1 className="ml-1 text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-red-600">
              Flash Typer{" "}
            </h1>
          </Link>
        </div>

        <ul className={`${mobileMenu && "hidden"} hidden md:flex space-x-3`}>
          <li>
            <Link className="transition duration-200 hover:text-red-600" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-200 hover:text-red-600"
              to="/high-scores"
            >
              High Scores
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-200 hover:text-red-600"
              to="/sign-in"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-200 hover:text-red-600"
              to="/sign-up"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        <div className="flex items-center md:hidden">
          <button
            className="focus:outline-white"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div></div>

      <ul className={`py-2 px-4 space-y-3 ${mobileMenu && "hidden"} md:hidden`}>
        <li>
          <Link className="transition duration-200 hover:text-red-600" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="transition duration-200 hover:text-red-600"
            to="/high-scores"
          >
            High Scores
          </Link>
        </li>
        <li>
          <Link
            className="transition duration-200 hover:text-red-600"
            to="/sign-in"
          >
            Sign In
          </Link>
        </li>
        <li>
          <Link
            className="transition duration-200 hover:text-red-600"
            to="/sign-up"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
