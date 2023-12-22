import React from "react";
import { MdMenu } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="lg:h-screen">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex lg:hidden w-full bg-slate-200 px-4 py-3 items-center justify-between">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="text-2xl cursor-pointer bg-accent p-4 text-white drawer-button lg:hidden"
          >
            <MdMenu />
          </label>
          <img
            src="https://www.taskflowpro.com/wp-content/themes/Anax/assets/images/logo.png"
            className="w-20 md:w-48"
            alt=""
          />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full flex flex-col justify-between bg-accent text-white">
            <div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white my-5"
                  src={user?.photoURL}
                  alt=""
                />
                <h1 className="text-[20px] font-semibold uppercase">
                  {user?.displayName}
                </h1>
              </div>
              {/* Sidebar content here */}
              <li className="hover:bg-[#374151] mt-2">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "bg-[#374151] rounded-none"
                        : "text-lg"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-[#374151] mt-2">
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "bg-[#374151] rounded-none"
                        : "text-lg"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </div>
            <li
              className="btn btn-error text-lg text-base-100 border-black rounded-lg"
              onClick={handleLogout}
            >
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
