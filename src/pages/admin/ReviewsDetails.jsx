import { useEffect, useState } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReviews } from "../../redux/actions/reviews";
import { togglePublicReview } from "../../redux/reviews/reviewsReducers";

const ReviewDetails = () => {
  const { reviews } = useSelector((state) => state.reviews);
  const { id } = useParams();
  const dispatch = useDispatch();

  const review = reviews.find((rev) => rev.id == id);

  const togglePublic = () => {
    dispatch(togglePublicReview(id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Review Details</h1>
        <button
          onClick={togglePublic}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white transition-colors duration-300 ${
            review?.status === "published"
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-400 hover:bg-gray-500"
          }`}
        >
          {review?.status === "published" ? <FiCheckCircle /> : <FiXCircle />}
          {review?.status === "published" ? "Public" : "Private"}
        </button>
      </div>

      {/* Review Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Guest</h2>
          <p className="text-gray-600">{review?.reviewer}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Listing</h2>
          <p className="text-gray-600">{review?.listingName}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Submitted At
          </h2>
          <p className="text-gray-600">
            {review?.submittedAt
              ? new Date(review.submittedAt).toLocaleString()
              : "N/A"}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Type / Channel
          </h2>
          <p className="text-gray-600">
            {review?.type} / {review?.channel || "hostaway"}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Rating</h2>
        <p className="text-gray-600">{review?.rating ?? "No rating"}</p>
      </div>

      {/* Review Categories */}
      {review?.categories && Object.keys(review.categories).length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Category Ratings
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(review.categories).map(
              ([category, rating], idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-700">{category}</p>
                  <p className="text-gray-600">Rating: {rating}/10</p>
                </div>
              ),
            )}
          </div>
        </div>
      )}

      {/* Review Text */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Review</h2>
        <p className="text-gray-600 whitespace-pre-line">{review?.review}</p>
      </div>
    </div>
  );
};

export default ReviewDetails;
