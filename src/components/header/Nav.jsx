import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/admin/dashboard" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <NavLink to={"/"}>
          <h1 className="text-2xl font-bold text-blue-600">The Flex</h1>
        </NavLink>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="hover:text-blue-600 transition"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-2xl text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <CloseOutlined />
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-6 mt-20 text-gray-700 font-medium text-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="hover:text-blue-600 transition"
              onClick={handleLinkClick}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
