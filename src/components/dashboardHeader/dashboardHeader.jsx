import React from "react";

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

export default DashboardHeader;
