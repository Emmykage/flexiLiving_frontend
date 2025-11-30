import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import Nav from "../../../components/header/Nav";
import { FiUsers } from "react-icons/fi";
import { LuBath, LuBed } from "react-icons/lu";
import {
  MdOutlineOtherHouses,
  MdSignalWifiConnectedNoInternet0,
} from "react-icons/md";
import Button from "../../../components/ui/Button";
import { CableIcon, ParkingMeterIcon, WifiIcon } from "lucide-react";
import { TbBasketCancel, TbToolsKitchen2Off } from "react-icons/tb";
import { FaRegClock, FaThermometerEmpty, FaWind } from "react-icons/fa";
import { BiSolidWasher } from "react-icons/bi";
import { VscDebugDisconnect } from "react-icons/vsc";
import { IoShieldCheckmarkOutline, IoShieldOutline } from "react-icons/io5";
import { PiCouch } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../../redux/actions/reviews";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  const { reviews, listing, loading } = useSelector((state) => state.reviews);
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const iconMap = [
    { match: "cable", icon: <PiCouch /> },
    { match: "wifi", icon: <WifiIcon /> },
    { match: "dryer", icon: <ParkingMeterIcon /> },
    { match: "kitchen", icon: <FaWind /> },
    { match: "internet", icon: <VscDebugDisconnect /> },
    { match: "wireless", icon: <MdSignalWifiConnectedNoInternet0 /> },
    { match: "washing", icon: <BiSolidWasher /> },
    { match: "heating", icon: <FaThermometerEmpty /> },
    { match: "smoke", icon: <IoShieldCheckmarkOutline /> },
    { match: "checkin", icon: <FaRegClock /> },
  ];

  const pickIcon = useCallback((text) => {
    const found = iconMap.find((item) =>
      text.toLowerCase().includes(item.match),
    );
    return found ? found.icon : <CableIcon />;
  }, []);

  const details = listing.find((l) => l.listingId == id);
  const text = details?.propertyDetails || "";

  console.log(details);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading reviews...
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto px-4 py-10 mt-4 bg-[#F1F3EE] ">
        <div className="grid grid-cols-2 gap-4 h-[580px]">
          <div className="rounded-tl-2xl rounded-bl-2xl 2xl h-full overflow-hidden">
            <img
              src={details?.image_urls?.[0]}
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={details?.image_urls?.[1]} alt="" className="h-full" />
            <img src={details?.image_urls?.[2]} alt="" className="h-full" />
            <img src={details?.image_urls?.[3]} alt="" className="h-full" />
            <img src={details?.image_urls?.[4]} alt="" className="h-full" />
          </div>
        </div>

        <div>
          <div className="py-4">
            <h2 className="text-2xl font-bold text-gray-700">
              {details?.listingName}
            </h2>

            <div className="py-6 flex gap-10 border-b border-gray-300">
              <div className="flex items-center gap-4 ">
                <FiUsers className="font-bold text-gray-600" />
                <div className="text-center">
                  <p>4</p>
                  <p className="text-gray-600 font-semibold text-sm">Guests</p>
                </div>
              </div>

              <div className="flex items-center gap-4 ">
                <LuBed />
                <div className="text-center">
                  <p>1</p>
                  <p className="text-gray-600 font-semibold text-sm">
                    bedrooms
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 ">
                <LuBath />
                <div className="text-center">
                  <p>1</p>
                  <p className="text-gray-600 font-semibold text-sm">
                    Bathrooms
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 ">
                <FiUsers />
                <div className="text-center">
                  <p>3</p>
                  <p className="text-gray-600 font-semibold text-sm">Beds</p>
                </div>
              </div>

              <div className="flex items-center gap-4 ">
                <MdOutlineOtherHouses />
                <div className="text-center">
                  <p>4</p>
                  <p className="text-gray-700 text-sm">Beds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <div className="flex-1">
            <div className="bg-white p-5 rounded-xl">
              <h3 className="text-gray-900 text-2xl mb-4 font-semibold">
                About this property
              </h3>
              <p>{expanded ? text : `${text.substring(0, 100)}...`}</p>
              <button onClick={toggleExpanded} className="my-4">
                {expanded ? "See Less" : "See More"}
              </button>
            </div>

            <div className="p-4 mt-8 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-2xl">Amenities</h3>
              <div className="grid grid-cols-3">
                {details?.amenities?.map((amenity) => (
                  <div className="flex gap-4 my-2 items-center">
                    {pickIcon(amenity)}
                    <p>{amenity} </p>{" "}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 mt-8 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-2xl">Stay Policies</h3>
              <div className="bg-[#F1F3EE] rounded-2xl p-4 my-4">
                <div className="flex items-center">
                  <FaRegClock />{" "}
                  <h5 className="font-semibold text-xl p-4">
                    Check-in & Check-out
                  </h5>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="bg-white rounded-lg p-3 flex-1">
                    <p className="font-normal text-gray-600">Check-in time</p>
                    <p className="text-gray-800 font-semibold">3:00 PM</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex-1">
                    <p className="font-normal text-gray-600">Check-in time</p>
                    <p className="text-gray-800 font-semibold">
                      {details?.policies?.checkOut}
                    </p>
                  </div>
                </div>{" "}
              </div>

              <div className="p-4 mt-8 bg-[#F1F3EE] rounded-xl shadow">
                <div className="flex items-center">
                  <IoShieldOutline />{" "}
                  <h5 className="font-semibold text-xl p-4">House Rules</h5>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {details?.policies?.houseRules.map((rule) => (
                    <div className="bg-white p-4 rounded-2xl font-semibold">
                      {" "}
                      {rule}{" "}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 mt-8 bg-[#F1F3EE] rounded-xl shadow">
                <div className="flex items-center">
                  <TbBasketCancel />{" "}
                  <h5 className="font-semibold text-xl p-4">
                    Cancellation Policy{" "}
                  </h5>
                </div>
                {details?.policies?.cancellationPolicy?.map((c) => (
                  <div className="bg-white mb-4 p-4 rounded-xl">
                    <h6 className="font-semibold text-xl text-gray-600 mb-2">
                      {c.policy}
                    </h6>
                    <ul className="list-disc list-inside">
                      {c.notes.map((n) => (
                        <li> {n}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-96 rounded-3xl sticky top-32 bg-white shadow hover:shadow-none transition-all ease-in duration-200 overflow-hidden">
            <div className="bg-green-950 p-4">
              <h3 className="text-white text-2xl">Book Your Stay</h3>
              <p className="text-gray-300 text-sm pt-3 font-semibold">
                Select dates to see prices
              </p>
            </div>
            <div className="p-4">
              <div className="flex gap-4 ">
                <div className="bg- basis-3/4 - bg-[#F1F3EE] rounded-lg p-2">
                  <input type="datetime-local" />
                </div>
                <div className="basis-1/4 bg-[#F1F3EE] rounded-lg p-2">
                  <select name="" id="">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">2</option>
                  </select>
                </div>
              </div>

              <div className="py-4 space-y-2">
                <div className="flex justify-between font-medium text-gray-600">
                  <p>Check-In </p>{" "}
                  <p className="text-black">{details?.policies.checkIn}</p>
                </div>{" "}
                <div className="flex justify-between font-medium text-gray-600">
                  <p>Check-Out </p>{" "}
                  <p className="text-black">{details?.policies.checkOut}</p>
                </div>{" "}
                <div className="flex justify-between font-medium text-gray-600">
                  <p>Guests </p> <p className="text-black">1 Guests</p>
                </div>
                <div className="flex justify-between font-semibold text-gray-700">
                  <p className="text-gray-600">Price per night (7 nights)</p>
                  <p>£940 </p>
                </div>
                <div className="flex justify-between text-gray-700">
                  <p className="text-gray-600 font-medium">Cleaning fee</p>
                  <p>£75</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Have a coupon?</p>
                </div>
                <div className=" rounded">
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className="p-2 w-full bg-[#F1F3EE]  rounded"
                  />
                </div>
                <div>
                  <div className="flex justify-between mt-4">
                    <p className="text-gray-800 font-semibold">Total</p>
                    <p className="font-bold text-lg text-gray-700">£921</p>
                  </div>
                  <div className="text-right text-sm">
                    <p>You saved £94</p>
                  </div>
                </div>
                <div>
                  <Button>Book Now</Button>{" "}
                  <Button className={"bg-white !text-gray-700 mt-4"}>
                    Send inquiry{" "}
                  </Button>
                  <button></button>
                </div>
                <p className="text-center"> Instant booking confirmation</p>
              </div>
            </div>
          </div>
        </div>

        {reviews.length === 0 && (
          <p className="text-gray-500 text-center">No reviews available.</p>
        )}

        <div className="space-y-6 mt-4 bg-white p-4 rounded-xl">
          <h3 className="text-3xl font-medium">Reviews</h3>
          {details?.reviews.map(
            (review) =>
              review.status === "published" && (
                <div
                  key={review.id}
                  className="bg-white border shadow-sm rounded-xl p-6"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {review.reviewer}
                      </h2>
                      <p className="text-sm text-gray-500">{review.channel}</p>
                    </div>

                    {/* Rating */}
                    <span className="text-yellow-500 text-lg font-semibold">
                      ⭐ {review.rating ?? "N/A"}
                    </span>
                  </div>

                  {/* Body */}
                  <p className="mt-4 text-gray-700">{review.review}</p>

                  {/* Date */}
                  <p className="mt-3 text-sm text-gray-500">{review.date}</p>

                  {/* Categories */}
                  {review.categories &&
                    Object.keys(review.categories).length > 0 && (
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        {Object.entries(review.categories).map(
                          ([cat, rating]) => (
                            <div
                              key={cat}
                              className="bg-gray-50 border rounded-lg p-3 text-sm flex items-center justify-between"
                            >
                              <span className="text-gray-600 capitalize">
                                {cat}
                              </span>
                              <span className="font-medium">⭐ {rating}</span>
                            </div>
                          ),
                        )}
                      </div>
                    )}
                </div>
              ),
          )}
        </div>

        <section className="w-full  mt-6 bg-white p-4 rounded-2xl">
          <h3 className="text-xl font-medium mb-3">Location</h3>
          <iframe
            title="School Location"
            className="w-full h-96 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.822331967282!2d7.362!3d9.181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0000000000%3A0x0000000000000000!2sKubwa%2C%20Abuja!5e0!3m2!1sen!2sng!4v1696645567890!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default PropertyDetails;
