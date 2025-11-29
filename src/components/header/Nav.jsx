import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAccessToken, logOut } from "../../redux/auth/authReducer";
import { Spin } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import LoginSetUp from "../loginSetUp/LoginSetUp";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 py-4 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <NavLink to={"/"}>
            <h1 className="text-2xl font-bold text-blue-600">The Flex</h1>
          </NavLink>

          <nav className="hidden md:flex space-x-6 text-gray-700 flex-1  justify-center font-medium">
            <NavLink to="/" className="hover:text-blue-600 transition">
              Home
            </NavLink>

            <NavLink
              to="/admin/dashboard"
              className="hover:text-blue-600 transition"
            >
              Dashboard
            </NavLink>
          </nav>

          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-gray-700 font-medium">
            <NavLink to="/" className="hover:text-blue-600 transition">
              Home
            </NavLink>

            <NavLink
              to="/admin/dashboard"
              className="hover:text-blue-600 transition"
            >
              Dashboard
            </NavLink>
          </div>
        )}
      </header>

      <LoginSetUp setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>
  );
};

export default Nav;
