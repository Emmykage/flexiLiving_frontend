import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getReviews } from "../../redux/actions/reviews";
import { motion } from "framer-motion";
import Card from "../../components/ui/Card";
import { Star } from "lucide-react";
import SortingHeader from "../../components/sortingHeader/SortingHeader";

const ReviewsPage = () => {
  const { reviews } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
    setFilteredReviews(reviews);
  }, [reviews]);

  const handleFilterChange = ({ rating, category, channel, time }) => {
    let filtered = [...reviews];

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

  useEffect(() => {
    dispatch(getReviews());
  }, []);
  console.log(filteredReviews);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Manager Dashboard</h1>

      <div className="p-6 bg-gray-50 min-h-screen">
        <SortingHeader onFilterChange={handleFilterChange} />
        {/* <Sort  */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews
            // ?.filter((r) => r.approved)
            .map((review) => (
              <CardReview review={review} />
            ))}
        </div>
      </div>
    </div>
  );
};

const CardReview = ({ review }) => {
  const navigate = useNavigate();
  console.log(review);

  const categoryScores = {};
  Object.entries(review.categories || {}).forEach(([cat, rating]) => {
    if (!categoryScores[cat]) categoryScores[cat] = [];
    categoryScores[cat].push(rating);
  });

  // const avgCategoryScores = Object.fromEntries(
  //   Object.entries(categoryScores).map(([cat, ratings]) => [
  //     cat,
  //     ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
  //   ])
  // );

  console.log(avgCategoryScores);

  return (
    <Card
      onClick={() => navigate(`/admin/reviews/${review.id}`)}
      key={review.id}
      className="shadow p-4 rounded-xl bg-white"
    >
      <h3 className="font-semibold text-lg">{review.listingName}</h3>
      <p className="text-gray-600 mt-2">{review.review}</p>
      <div className="flex items-center gap-1 mt-3">
        <Star className="w-4 h-4" /> {review.rating}
      </div>
    </Card>
  );
};

export default ReviewsPage;
