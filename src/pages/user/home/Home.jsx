import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../../components/productCard/ProductCard";
import Loader from "../../../components/loader/Loader";
import Nav from "../../../components/header/Nav";
import Slider from "../../../components/heroBanner/Slider";

const LandingHome = () => {
  const { reviews, loading, listing } = useSelector((state) => state.reviews);

  return (
    <>
      <Nav />
      <Slider />
      <div className="min-h-screen bg-gray-50">
        <section id="products" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Available Listing
          </h3>

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
    </>
  );
};

export default LandingHome;
