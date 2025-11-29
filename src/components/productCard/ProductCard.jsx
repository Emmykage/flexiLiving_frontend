import React from "react";
import { nairaFormat } from "../../utils/nairaFormat";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  console.log(product);

  return (
    <div
      key={product.id}
      className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
    >
      <img
        src={product?.image_urls?.[0]}
        alt={product?.listingName}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h4 className="text-xl font-semibold text-gray-800">
          {product?.listingName}
        </h4>

        <button
          onClick={() => navigate(`/properties/${product?.listingId}`)}
          className="w-full bg-[#2F855A] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
