import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginSetUp from "../../../components/loginSetUp/LoginSetUp";
import ProductCard from "../../../components/productCard/ProductCard";
import Loader from "../../../components/loader/Loader";
import { getReviews } from "../../../redux/actions/reviews";
import Nav from "../../../components/header/Nav";
import Slider from "../../../components/heroBanner/Slider";

const LandingHome = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { reviews, loading, listing } = useSelector((state) => state.reviews);

  const dispatch = useDispatch();

  const toggleAction = () => {
    if (!accessToken) {
      setIsModalOpen(true);
      return;
    }

    navigate("/product-form");
  };
  useEffect(() => {
    dispatch(getReviews());
  }, []);
  return (
    <>
      <Nav />
      <Slider />
      <div className="min-h-screen bg-gray-50">
        <section id="products" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Available Listing
          </h3>
          <button
            onClick={toggleAction}
            className="bg-primary -600 text-white px-5 my-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            {/* {accessToken ? "+ Create Product" : "Login To Create Product"} */}
          </button>
          <div>
            {loading ? (
              <div className="flex justify-center py-10">
                <Loader size="large" />
              </div>
            ) : reviews.length === 0 ? (
              <h3 className="text-center text-3xl font-bold">
                No Item has been added
              </h3>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {listing.map((prop) => (
                  <ProductCard product={prop} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <LoginSetUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default LandingHome;
