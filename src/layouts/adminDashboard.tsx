import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import axios from "axios";

// ------------------ Dashboard Page ------------------
export default function Dashboard() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get("/api/reviews/hostaway").then((res) => {
      setListings(res.data.listings || []);
    });
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Manager Dashboardss</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <motion.div
            key={listing.id}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <Card className="shadow-lg rounded-2xl p-4">
              <CardContent>
                <h2 className="text-xl font-semibold">{listing.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <Star className="w-5 h-5" />
                  <span className="text-lg font-semibold">
                    {listing.averageRating || "N/A"}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {listing.reviews.length} total reviews
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ------------------ Property Reviews Page ------------------
export function PropertyPage({ listing }) {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{listing.name}</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Guest Reviews</h2>
        {listing.reviews.filter((r) => r.approved).length === 0 && (
          <p className="text-gray-500">No approved reviews yet.</p>
        )}

        <div className="space-y-4">
          {listing.reviews
            .filter((r) => r.approved)
            .map((review) => (
              <Card key={review.id} className="shadow p-4 rounded-xl bg-white">
                <h3 className="font-semibold text-lg">{review.guestName}</h3>
                <p className="text-gray-600 mt-2">{review.comment}</p>
                <div className="flex items-center gap-1 mt-3">
                  <Star className="w-4 h-4" /> {review.rating}
                </div>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
}

// ------------------ Review Table Component ------------------
export function ReviewTable({ reviews, onApprove }) {
  return (
    <table className="w-full border-collapse text-left">
      <thead className="border-b">
        <tr>
          <th className="p-3">Guest</th>
          <th className="p-3">Rating</th>
          <th className="p-3">Comment</th>
          <th className="p-3">Approve</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review) => (
          <tr key={review.id} className="border-b">
            <td className="p-3">{review.guestName}</td>
            <td className="p-3">{review.rating}</td>
            <td className="p-3 max-w-xs">{review.comment}</td>
            <td className="p-3">
              <Button
                variant={review.approved ? "secondary" : "default"}
                onClick={() => onApprove(review)}
              >
                {review.approved ? "Unapprove" : "Approve"}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ------------------ Filters Component ------------------
export function Filters({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-100 rounded-xl">
      <input
        type="number"
        placeholder="Min Rating"
        className="p-2 rounded border w-32"
        value={filters.rating}
        onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
      />

      <input
        type="date"
        className="p-2 rounded border"
        value={filters.date}
        onChange={(e) => setFilters({ ...filters, date: e.target.value })}
      />

      <select
        className="p-2 rounded border"
        value={filters.channel}
        onChange={(e) => setFilters({ ...filters, channel: e.target.value })}
      >
        <option value="">All Channels</option>
        <option value="airbnb">Airbnb</option>
        <option value="booking.com">Booking.com</option>
        <option value="direct">Direct</option>
      </select>
    </div>
  );
}
