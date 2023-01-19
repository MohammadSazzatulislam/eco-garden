import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full px-5 shadow">
        <div className="justify-between  mx-auto items-center md:flex ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2 className="text-2xl uppercase font-bold text-white">
                  Eco Garden
                </h2>
              </Link>
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
                  <li className="text-white text-md font-semibold hover:text-indigo-200">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li className="text-white text-md font-semibold hover:text-indigo-200">
                    About
                  </li>
                </Link>
                <Link to="/profile">
                  <li className="text-white text-md font-semibold hover:text-indigo-200">
                    Profile
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
