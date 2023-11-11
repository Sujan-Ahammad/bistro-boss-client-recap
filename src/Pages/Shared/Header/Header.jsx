import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const user = true;
  const navOptions = (
    <>
      <Link className="ml-4">HOME</Link>
      <Link className="ml-4">CONTUCT US</Link>
      <Link className="ml-4">DASHBOARD</Link>
      <Link className="ml-4">OUR MENU</Link>
      <Link className="ml-4">OUR SHOP</Link>

      {user ? (
        <Link className="ml-4">LOGIN</Link>
      ) : (
        <div className="ml-4 flex items-center gap-2">
          <button>SIGN OUT </button>{" "}
          <img
            className="w-10 h-10 cursor-pointer rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      )}
    </>
  );

  return (
    <div className="navbar text-white fixed z-10 bg-opacity-30 bg-base-200 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center"
          >
            {navOptions}
          </ul>
        </div>
        <div className="btn btn-ghost normal-case text-xl inline space-y-0">
          <p>BISTRO BOSS</p> <small>Restaurant</small>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Header;
