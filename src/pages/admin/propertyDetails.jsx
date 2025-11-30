import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FiStar } from "react-icons/fi";

const AdminPropertyDetails = () => {
  const { listing } = useSelector((state) => state.reviews);
  const { id } = useParams();

  const property = listing.find((p) => p.listingId === id);
  if (!property) return <p className="text-center mt-10">Property not found</p>;

  const reviews = property.reviews || [];
  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + (r.rating ?? 0), 0) / reviews.length
        ).toFixed(1)
      : "N/A";

 const categoryRatings = {};
  const categories = ["cleanliness", "communication", "respect_house_rules"];
  categories.forEach((cat) => {
    const catRatings = reviews
      .map((r) => r.categories?.[cat])
      .filter((r) => r !== undefined);
    categoryRatings[cat] =
      catRatings.length > 0
        ? (catRatings.reduce((a, b) => a + b, 0) / catRatings.length).toFixed(1)
        : "N/A";
  });


  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">

      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
        <h1 className="text-3xl font-bold text-gray-800">{property.listingName}</h1>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <FiStar className="text-yellow-500 text-xl" />
          <span className="font-semibold text-gray-700">{avgRating}</span>
          <span className="text-gray-500">({reviews.length} reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {property.image_urls?.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Property image ${idx + 1}`}
            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-sm"
          />
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">About this property</h2>
        <p className="text-gray-600">{property.propertyDetails}</p>

        {property.amenities?.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Amenities</h3>
            <ul className="flex flex-wrap gap-2">
              {property.amenities.map((a, idx) => (
                <li
                  key={idx}
                  className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h1>Performances</h1>

           <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < Math.round(avgRating) ? "★" : "☆"}</span>
            ))}
          </div>
          {/* <p className="text-gray-600 text-sm">
            {avgRating?.toFixed(1)} • {reviews.length} reviews
          </p> */}
        </div>
        </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Property Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg text-center shadow-sm">
            <p className="font-semibold text-gray-700">Average Rating</p>
            <p className="text-yellow-500 text-xl flex items-center justify-center gap-1">
              <FiStar /> {avgRating}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-center shadow-sm">
            <p className="font-semibold text-gray-700">Total Reviews</p>
            <p className="text-gray-700 text-xl">{reviews.length}</p>
          </div>
          {Object.entries(categoryRatings).map(([cat, rating]) => (
            <div key={cat} className="p-4 bg-gray-50 rounded-lg text-center shadow-sm">
              <p className="font-semibold text-gray-700">{cat.replace("_", " ")}</p>
              <p className="text-gray-700 text-xl">{rating}</p>
            </div>
          ))}
        </div>
      </div>

        {property.policies && (
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Policies</h3>
            <p className="text-gray-600">Check-in: {property.policies.checkIn}</p>
            <p className="text-gray-600">Check-out: {property.policies.checkOut}</p>
            {property.policies.houseRules?.length > 0 && (
              <ul className="list-disc list-inside text-gray-600 mt-1">
                {property.policies.houseRules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {reviews.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Reviews</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-700">{review.reviewer}</p>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <FiStar /> {review.rating ?? "N/A"}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPropertyDetails;
