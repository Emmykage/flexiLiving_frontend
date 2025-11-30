import React from "react";

const AminPropertyDetails = () => {
  const [reviews, setReviews] = useState([]);

  const mockProperty = {
    id: "2B-N1-A",
    name: "2B N1 A - 29 Shoreditch Heights",
    images: [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-171145-d2d1AA---QmmZ9--jdAE2EAoC8VQkp3SRiAKwgxPhgPuc-68e7e2372f81a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-171145-7BQqx0V5WtAZ25sBgmZIPj0GEEelcOfWW1BT---fY7wU-68e7e23e9fbf1",
    ],
    description: "Cozy 1-bedroom apartment with all amenities included.",
    amenities: ["WiFi", "Cable TV", "Parking"],
  };

  const mockReviews = [
    {
      id: 7453,
      reviewer: "Shane Finkelstein",
      review: "Shane and family are wonderful!",
      rating: 4.8,
      public: true,
    },
    {
      id: 7454,
      reviewer: "Jane Doe",
      review: "Great place, very clean!",
      rating: 5,
      public: false,
    },
  ];

  useEffect(() => {
    setReviews(mockReviews);
  }, []);

  const togglePublic = (id) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, public: !r.public } : r)),
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{mockProperty.name}</h1>

      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {mockProperty.images.map((img, i) => (
          <img key={i} src={img} alt={`Property ${i}`} className="rounded-lg" />
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{mockProperty.description}</p>

      {/* Amenities */}
      <div className="flex gap-2 flex-wrap mb-6">
        {mockProperty.amenities.map((a, i) => (
          <span key={i} className="bg-gray-200 px-3 py-1 rounded">
            {a}
          </span>
        ))}
      </div>

      {/* Reviews */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-4 mb-4 bg-white rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{review.reviewer}</p>
              <p className="text-gray-600">{review.review}</p>
              <p className="text-gray-500 text-sm">Rating: {review.rating}</p>
            </div>
            <button
              onClick={() => togglePublic(review.id)}
              className={`p-2 rounded ${
                review.public ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              {review.public ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AminPropertyDetails;
