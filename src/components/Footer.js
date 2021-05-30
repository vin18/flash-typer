import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p className="text-center px-1">
        2021,{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-red-600">
          Flash Typer
        </span>
        . Made with ❤️ by{" "}
        <a
          className="hover:underline "
          href="https://github.com/vin18"
          target="_blank"
        >
          <span>Vinit</span>
          <FaGithub className="inline-block mb-1 ml-1 text-lg " />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
