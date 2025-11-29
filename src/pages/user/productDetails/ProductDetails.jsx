import { useEffect, useState } from "react";

export default function PublicReviewDisplay() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading reviews...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-semibold text-gray-800 mb-10">
        Guest Reviews
      </h1>

      {reviews.length === 0 && (
        <p className="text-gray-500 text-center">No reviews available.</p>
      )}

      <div className="space-y-6">
        {reviews.map((review) => (
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
            {review.categories && Object.keys(review.categories).length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                {Object.entries(review.categories).map(([cat, rating]) => (
                  <div
                    key={cat}
                    className="bg-gray-50 border rounded-lg p-3 text-sm flex items-center justify-between"
                  >
                    <span className="text-gray-600 capitalize">{cat}</span>
                    <span className="font-medium">⭐ {rating}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
