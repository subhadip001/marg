import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="bg-bb border-bb-200 bg-bb-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-list">
            MARG- Historic Roads
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-bb-100 rounded-lg bg-bb-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-bb bg-bb-800 md:bg-bb-900 border-bb-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-list bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-bb-900 rounded hover:bg-bb-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-list hover:bg-bb-700 hover:text-list"
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
                className="block py-2 pl-3 pr-4 text-bb-900 rounded hover:bg-bb-100 md:hover:bg-transparent md:border-0 md:p-0 text-list md:hover:text-blue-500 hover:bg-bb-700 hover:text-list"
              >
                Conservation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-bb-900 rounded hover:bg-bb-100 md:hover:bg-transparent md:border-0 md:p-0 text-list md:hover:text-blue-500 hover:bg-bb-700 hover:text-list"
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
  )
}
export default Navbar