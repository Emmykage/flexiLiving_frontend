import React, { useState } from "react";

const SortingHeader = ({ onFilterChange }) => {
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [channel, setChannel] = useState("");
  const [time, setTime] = useState("");
  const handleChange = () => {
    onFilterChange({ rating, category, channel, time });
  };
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-4 items-end mb-6">
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
            handleChange();
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
            handleChange();
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
            handleChange();
          }}
        >
          <option value="">All</option>
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default SortingHeader;
