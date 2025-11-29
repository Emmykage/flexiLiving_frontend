import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getReviews } from "../../redux/actions/reviews";
import { motion } from "framer-motion";

export function PropertyPage() {

   const { reviews } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
        setFilteredReviews(reviews);
  }, []);

    const handleFilterChange = ({ rating, category, channel, time }) => {
    let filtered = [...reviews];

    if (rating) filtered = filtered.filter(r => r.rating >= parseFloat(rating));
    if (category) filtered = filtered.filter(r => r.categories && r.categories[category] !== undefined);
    if (channel) filtered = filtered.filter(r => r.channel === channel);
    if (time) filtered.sort((a, b) => time === "latest" ? new Date(b.submittedAt) - new Date(a.submittedAt) : new Date(a.submittedAt) - new Date(b.submittedAt));

    setFilteredReviews(filtered);
  };


 

  useEffect(() => {
    dispatch(getReviews());
  }, []);
  console.log(reviews);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Manager Dashboard</h1>

      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews.map((property) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={property.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-600 mt-2">
                Reviews: {property.reviews} | Avg Rating: {property.avgRating}
              </p>
              <div className="mt-4 flex gap-4">
                <button className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  View Reviews
                </button>
                <button className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                  Edit Property
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
