import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full px-5  shadow">
        <div className="justify-between  mx-auto items-center md:flex ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2 className="text-2xl uppercase  font-bold">Eco Garden</h2>
              </Link>
              <div className="md:hidden flex items-center gap-2">
                <button className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                  Log In
                </button>
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <Link to="/">
                  <li className=" text-md font-semibold hover:text-blue-500">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li className=" text-md font-semibold hover:text-blue-500">
                    About
                  </li>
                </Link>
                <Link to="/profile">
                  <li className=" text-md font-semibold hover:text-blue-500">
                    Profile
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="hidden  lg:flex items-center space-x-2 md:inline-block">
            <button className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
              Log In
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
