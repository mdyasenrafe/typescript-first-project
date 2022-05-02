import React from "react";
import { Link, NavLink } from "react-router-dom";
import navbarData from "../Utilities/Navbar.data";

const Navbar = () => {
  return (
    <div className="bg-[#F6F7FF]">
      <div className=" container mx-auto  px-6 sm:px-6 md:px-16  py-4">
        <nav className="flex justify-between items-center m-auto">
          <Link to="/" className="flex items-center">
            <img
              className="h-[40px]"
              src={"https://i.ibb.co/yXc6V3k/large.png"}
              alt="logo"
            />
          </Link>

          <ul className="hidden md:flex justify-between items-center">
            <li>
              {navbarData.map((data, index) => (
                <NavLink
                  to={`${data.cta}`}
                  className={({ isActive }) =>
                    isActive === true
                      ? " text-[#1976FD] mx-4 hover:text-[#1976FD]"
                      : "mx-4 hover:text-[#1976FD]"
                  }
                  key={index}
                >
                  {data.title}
                </NavLink>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
