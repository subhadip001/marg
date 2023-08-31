import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-bb w-full">
      <div className="font-['Lato'] h-20 w-[95%] mx-auto flex items-center justify-between content-center">
        <Link to="/" className="flex items-center">
          <span className="self-center text-[calc(1.5vw+0.5rem)] font-[550] whitespace-nowrap text-white">
            MARG- Historic Roads
          </span>
        </Link>

        <div className=" block w-auto" id="navbar-default">
          <ul className="font-[500] flex text-base space-x-5">
            <li>
              <Link
                to="/about/themarg"
                className="block  text-white"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/explore/historicroutes" className="block  text-white">
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/identification&development/methodology"
                className="block   text-white"
              >
                Identification & Documentation
              </Link>
            </li>
            <li>
              <Link
                to="/conservation/preservation"
                className="block  text-white"
              >
                Conservation
              </Link>
            </li>
            <li>
              <Link to="/management/safety" className="block text-white">
                Management
              </Link>
            </li>
            <li>
              <Link
                to="/themargnetwork/newinstitutionuser"
                className="block  text-white"
              >
                The MARG Network
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
