import React, { useState, useEffect } from "react";

const mockProperties = [
  {
    id: "2B-N1-A",
    name: "2B N1 A - 29 Shoreditch Heights",
    reviews: 12,
    avgRating: 4.8,
  },
  {
    id: "3C-2B-B",
    name: "3C 2B - Modern Studio Flat",
    reviews: 8,
    avgRating: 4.5,
  },
  {
    id: "4D-1A-C",
    name: "4D 1A - Cozy Apartment",
    reviews: 15,
    avgRating: 4.9,
  },
];

export default function AdminDashboard() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setProperties(mockProperties);
  }, []);

  useEffect(() => {
    // mock reviews
    const mockReviews = [
      {
        id: 1,
        reviewer: "Shane",
        review: "Great stay!",
        rating: 4.8,
        public: true,
        channel: "airbnb",
        categories: { cleanliness: 10 },
        submittedAt: "2023-11-01T12:00:00",
      },
      {
        id: 2,
        reviewer: "Jane",
        review: "Very clean!",
        rating: 5,
        public: false,
        channel: "hostaway",
        categories: { communication: 9 },
        submittedAt: "2023-10-21T12:00:00",
      },
      // ...more reviews
    ];
    setReviews(mockReviews);
    setFilteredReviews(mockReviews);
  }, []);

  const handleView = (property) => {
    alert(`Go to property page: ${property.name}`);
  };

  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [channel, setChannel] = useState("");
  const [time, setTime] = useState("");

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

  const filteredProperties = properties.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <DashboardHeader title="Admin Dashboard" />

        <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-4 items-end mb-6">
          {/* Rating */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Rating</label>
            <select
              className="border border-gray-300 rounded px-2 py-1"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
                handleChange();
              }}
            >
              <option value="">All</option>
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r}+
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Category</label>
            <select
              className="border border-gray-300 rounded px-2 py-1"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                handleFilterChange();
              }}
            >
              <option value="">All</option>
              <option value="cleanliness">Cleanliness</option>
              <option value="communication">Communication</option>
              <option value="respect_house_rules">House Rules</option>
            </select>
          </div>

          {/* Channel */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Channel</label>
            <select
              className="border border-gray-300 rounded px-2 py-1"
              value={channel}
              onChange={(e) => {
                setChannel(e.target.value);
                handleFilterChange();
              }}
            >
              <option value="">All</option>
              <option value="hostaway">Hostaway</option>
              <option value="airbnb">Airbnb</option>
            </select>
          </div>

          {/* Time */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Time</label>
            <select
              className="border border-gray-300 rounded px-2 py-1"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                handleFilterChange();
              }}
            >
              <option value="">All</option>
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
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
          {filteredProperties.map((p) => (
            <PropertyCard key={p.id} property={p} onView={handleView} />
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
  // const avgRating = reviewsForProperty.reduce((sum, r) => sum + (r.rating ?? 0), 0) / reviewsForProperty.length;
  // const reviewCount = reviewsForProperty.length;
  // const categoryScores = {};
  // reviewsForProperty.forEach((r) => {
  //   Object.entries(r.categories || {}).forEach(([cat, rating]) => {
  //     if (!categoryScores[cat]) categoryScores[cat] = [];
  //     categoryScores[cat].push(rating);
  //   });
  // });

  // const avgCategoryScores = Object.fromEntries(
  //   Object.entries(categoryScores).map(([cat, ratings]) => [
  //     cat,
  //     ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
  //   ])
  // );
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
      <h2 className="text-xl font-semibold">{property.name}</h2>
      <p className="text-gray-600 mt-1">
        Reviews: {property.reviews} | Avg Rating: {property.avgRating}
      </p>
      <button
        onClick={() => onView(property)}
        className="mt-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        View Details
      </button>
    </div>
  );
};

const DashboardHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Property
      </button>
    </div>
  );
};
