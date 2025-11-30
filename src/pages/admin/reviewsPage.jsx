import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import { ArrowRight, Star } from "lucide-react";
import SortingHeader from "../../components/sortingHeader/SortingHeader";

const ReviewsPage = () => {
  const { reviews } = useSelector((state) => state.reviews);
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
    setFilteredReviews(reviews);
  }, [reviews]);

  const handleFilterChange = ({ rating, category, channel, time }) => {
    let filtered = [...reviews];

    console.log(category);

    if (rating)
      filtered = filtered.filter((r) => r.rating >= parseFloat(rating));
    if (category)
      filtered = filtered.filter(
        (r) => r.categories && r.categories[category] !== undefined,
      );
    if (channel) filtered = filtered.filter((r) => r.channel === channel);
    if (time)
      filtered.sort((a, b) =>
        time === "latest"
          ? new Date(b.submittedAt) - new Date(a.submittedAt)
          : new Date(a.submittedAt) - new Date(b.submittedAt),
      );

    setFilteredReviews(filtered);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">All Reviews </h1>

      <div className="p-6 bg-gray-50 min-h-screen">
        <SortingHeader onFilterChange={handleFilterChange} />
        {/* <Sort  */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <CardReview review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CardReview = ({ review }) => {
  const navigate = useNavigate();

  const categoryScores = {};
  Object.entries(review.categories || {}).forEach(([cat, rating]) => {
    if (!categoryScores[cat]) categoryScores[cat] = [];
    categoryScores[cat].push(rating);
  });

  const avgCategoryScores = Object.fromEntries(
    Object.entries(categoryScores).map(([cat, ratings]) => [
      cat,
      ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
    ]),
  );

  return (
    <Card
      key={review.id}
      className="shadow p-4 rounded-xl bg-white  cursor-pointer"
    >
      <div className="bg-white ">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              {review?.reviewer}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{review?.listingName}</p>
          </div>

          {/* Rating */}
          {review.rating ? (
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium">{review?.rating}</span>
            </div>
          ) : (
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
              Host Review
            </span>
          )}
        </div>

        {/* Review text */}
        <p className="text-gray-700 mt-3 line-clamp-2">{review.status}</p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-xs text-gray-500">
            {new Date(review.submittedAt).toLocaleDateString()}
          </p>

          <button
            // onClick={onView}
            onClick={() => navigate(`/admin/reviews/${review.id}`)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Review <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ReviewsPage;
