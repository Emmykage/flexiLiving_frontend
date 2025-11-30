import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <IoGridOutline /> },
    { name: "Reviews", path: "/admin/reviews", icon: <MdOutlineRateReview /> },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="min-h-screen flex w-full">

      <aside className="w-64 shadow-md p-5 border-r bg-white border-gray-300 hidden md:block">
        <NavLink to="/">
          <h1 className="text-2xl font-bold p-6 border-b border-gray-300">
            Flex Living Admin
          </h1>
        </NavLink>
        <nav className="space-y-3 pt-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded ${
                  isActive ? "bg-gray-700 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="md:hidden">
        <button
          className="fixed top-4 left-4 z-50 text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <NavLink to="/" onClick={handleLinkClick}>
            <h1 className="text-2xl mt-4 font-bold p-6 border-b border-gray-300">
              Flex Living Admin
            </h1>
          </NavLink>
          <nav className="flex flex-col space-y-3 pt-4 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded ${
                    isActive ? "bg-gray-700 text-white" : "hover:bg-gray-200"
                  }`
                }
                onClick={handleLinkClick}
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
