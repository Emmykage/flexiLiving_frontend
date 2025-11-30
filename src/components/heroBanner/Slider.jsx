import "./slider.scss";
import { SiWorldhealthorganization } from "react-icons/si";
import { FaUsersCog } from "react-icons/fa";
import { PiOfficeChairBold } from "react-icons/pi";

const Slider = () => {
  return (
    <div className=" h-[600px] z-20 relative hero-banner bg-center bg-cover w-full  bg-[url('/background/Hero_Desktop_Large.webp')]">
      <div className="bg-green-50/30 h-full z-50 w-full absolute flex transition-all duration-300 ease-in-out justify-center items-center">
        <div className="bg-white mx-4 shadow rounded md:w-1/2 min-h-40 py-8 px-5 ">
          <div className="flex items-center gap-4 search-feat ">
            <div className="flex items-center">
              <input type="checkbox" id="coworking_space" className="mr-3" />
              <label
                htmlFor="coworking_space"
                className="text-sm font-medium text-gray-600"
              >
                Co-Working Spaces
              </label>
            </div>
            <div>
              <input type="checkbox" id="coworking_space" className="mr-3" />
              <label
                htmlFor="coworking_space"
                className="text-sm font-medium text-gray-600"
              >
                Private Offices
              </label>
            </div>
            <div>
              <input type="checkbox" id="coworking_space" className="mr-3" />
              <label
                htmlFor="coworking_space"
                className="text-sm font-medium text-gray-600"
              >
                Virtual Offices
              </label>
            </div>
          </div>

          <div className="my-4">
            <input
              type="text"
              className="px-4 py-6 border outline-gray-200 text-sm font-medium rounded w-full border-gray-300 "
              placeholder="Search by City or Space"
            />
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-gray-400 flex items-center gap-1.5">
              <SiWorldhealthorganization />
              <span className="text-gray-600 font-medium">20</span>
              172 Countries
            </span>

            <span className="text-sm text-gray-400 flex items-center gap-3">
              <PiOfficeChairBold />
              <span className="text-gray-600 font-medium">20</span>
              172 Countries
            </span>

            <span className="text-sm text-gray-400 flex items-center gap-3">
              <span className="text-gray-600 font-medium">70</span>
              <FaUsersCog />
              Users
            </span>
          </div>
        </div>
      </div>
      <div className="flex relative"></div>
    </div>
  );
};

export default Slider;
