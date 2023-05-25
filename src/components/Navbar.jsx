import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-bb border-bb-200 bg-bb-900 max-w-screen w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-list">
            MARG- Historic Roads
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200  hover:bg-gray-700"
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
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-list bg-blue-700 rounded md:bg-transparent md:text-list md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded hover:bg-bb md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-list hover:bg-bb-700 hover:text-list"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-bb-900 rounded hover:bg-bb-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-list hover:bg-bb-700 hover:text-list"
              >
                Identification & Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-bb-900 rounded hover:bg-bb-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-list hover:bg-bb-700 hover:text-list"
              >
                Conservation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-bb-900 rounded hover:bg-bb-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-list hover:bg-bb-700 hover:text-list"
              >
                Management
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-bb-900 rounded hover:bg-bb-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-list hover:bg-bb-700 hover:text-list"
              >
                The MARG Network
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
