import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import axios from "axios";
import Card from "../../components/ui/Card";
import { CardContent } from "../../components/ui/CardContent";

const Properties = () => {
  //   const [listings, setListings] = useState([]);

  const listings = [
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
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Manager Dashboard</h1>

      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="grid md:grid-cols-2 gap-6">
          {listings.map((property) => (
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
};

export default Properties;
