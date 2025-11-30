import { NavLink } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex w-full">
      <aside className="w-64 shadow-md p-5 border-r bg-white border-gray-300 hidden md:block">
        <NavLink to="/">
          {" "}
          <h1 className="text-2xl font-bold p-6 border-b border-gray-300">
            Flex Living Admin
          </h1>
        </NavLink>
        <nav className="space-y-3 pt-4">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded ${
                isActive ? "bg-gray-700 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <IoGridOutline />
            Dashboard{" "}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded ${
                isActive ? "bg-gray-700 text-white" : "hover:bg-gray-200"
              }`
            }
            to="/admin/reviews"
          >
            <MdOutlineRateReview />
            Reviews
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-white/90">{children}</main>
    </div>
  );
}
