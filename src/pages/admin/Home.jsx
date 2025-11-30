import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [properties, setProperties] = useState([]);
  const dispatch = useDispatch();

  const { reviews, listing } = useSelector((state) => state.reviews);

  const [search, setSearch] = useState("");
  const [filteredReviews, setFilteredReviews] = useState([]);

  return (
    <div className="flex">
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <DashboardHeader title="Admin Dashboard" />

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search properties..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listing.map((p) => (
            <PropertyCard key={p.id} property={p} onView={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ReviewCard = ({ review, onToggle }) => {
  return (
    <div className="p-4 mb-4 bg-white rounded-xl shadow flex justify-between items-center">
      <div>
        <p className="font-semibold">{review.reviewer}</p>
        <p className="text-gray-600">{review.review}</p>
        <p className="text-gray-500 text-sm">Rating: {review.rating}</p>
      </div>
      <button
        onClick={() => onToggle(review.id)}
        className={`p-2 rounded ${review.public ? "bg-green-500 text-white" : "bg-gray-200"}`}
      >
        {review.public ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </button>
    </div>
  );
};

const PropertyCard = ({ property, onView }) => {
  const navigate = useNavigate()
  const { image_urls, listingName, reviews, listingId } = property;
  const avgRating =
    property.reviews.reduce((sum, r) => sum + (r.rating ?? 0), 0) /
    property.reviews.length;

  const reviewCount = property.reviews.length;
  const categoryScores = {};
  property.reviews.forEach((r) => {
    Object.entries(r.categories || {}).forEach(([cat, rating]) => {
      if (!categoryScores[cat]) categoryScores[cat] = [];
      categoryScores[cat].push(rating);
    });
  });

  const avgCategoryScores = Object.fromEntries(
    Object.entries(categoryScores).map(([cat, ratings]) => [
      cat,
      ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
    ]),
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
      <div className="h-52 w-full overflow-hidden">
        <img
          src={image_urls?.[0] || "https://via.placeholder.com/300x200"}
          alt={listingName}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-900">{listingName}</h3>

        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < Math.round(avgRating) ? "★" : "☆"}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            {avgRating.toFixed(1)} • {reviews.length} reviews
          </p>
        </div>
        <Button onClick={() => navigate(`/admin/properties/${listingId}`)} className="mt-4">
          View Detail
        </Button>{" "}
      </div>
    </div>
  );
};
