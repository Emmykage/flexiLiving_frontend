import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex w-full">
      {/* Sidebar */}
      <aside className="w-64 shadow-md p-5 border-r bg-white border-gray-300 hidden md:block">
        <h1 className="text-2xl font-bold p-6 border-b border-gray-700">
          Flex Living Admin
        </h1>
        <nav className="space-y-3">
          <NavLink
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700"
            to="/admin/dashboard"
          >
            <IoGridOutline />
            Dashboard{" "}
          </NavLink>
          <NavLink
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700"
            to="/admin/properties"
          >
            <CiHome /> Properties
          </NavLink>
          <NavLink
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700"
            to="/admin/reviews"
          >
            <MdOutlineRateReview />
            Reviews
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-white/90">{children}</main>
    </div>
  );
}
