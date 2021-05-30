import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="text-center mt-24 flex flex-col justify-center items-center">
        <p className="uppercase text-xl tracking-wider text-gray-600">
          Typing speed test
        </p>
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600  to-yellow-300  p-1">
          Test your typing skills
        </h1>

        <div>
          <div className="mt-12 flex flex-col font-bold text-gray-700 rounded-full bg-white justify-center items-center border-4 border-yellow-300 h-32 w-32">
            <span className="font-bold text-gray-900 text-3xl">60:00</span>
            <span>seconds</span>
          </div>
        </div>

        <div className="w-full mt-24">
          <span className="inline-block bg-yellow-400 text-gray-900 animate-bounce px-4 py-1 rounded shaodow">
            Start typing
          </span>
          <textarea className="block mx-auto p-4 mt-4 border border-gray-900 resize-none rounded-md shadow-lg w-1/2 text-xl"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;
