import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="font-['Open_Sans'] bg-bb  max-w-full h-24 w-full  flex flex-wrap items-center justify-between mx-auto p-8">
        <Link to="/" className="flex items-center">
          <span className="self-center text-[calc(1.4vw+0.5rem)] font-semibold whitespace-nowrap text-white">
            MARG- Historic Roads
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-white-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-bb rounded-lg bg-bb md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-bb">
            <li>
              <Link
                to="/about/themarg"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:p-0 text-white hover:bg-bb-700 hover:text-white"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/explore/historicroutes"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:p-0 text-white hover:bg-bb-700 hover:text-white"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/identification&development/methodology"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:p-0 text-white hover:bg-bb-700 hover:text-white"
              >
                Identification & Development
              </Link>
            </li>
            <li>
              <Link
                to="/conservation/preservation"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:p-0 text-white hover:bg-bb-700 hover:text-white"
              >
                Conservation
              </Link>
            </li>
            <li>
              <Link
                to="/management/safety"
                className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-white hover:bg-bb-700 hover:text-white"
              >
                Management
              </Link>
            </li>
            <li>
              <Link
                to="/themargnetwork/newinstitutionuser"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:p-0 text-white hover:bg-bb-700 hover:text-white"
              >
                The MARG Network
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};
export default Navbar;
