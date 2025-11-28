import React, { useState } from 'react'
import { motion } from "framer-motion";
import Card from '../../components/ui/Card';
import { CardContent } from '../../components/ui/CardContent';
import { Star } from 'lucide-react';
const Home = () => {
    const [listings, setListings] = useState([]);
  return (
   <div className="p-6 space-y-6">
<h1 className="text-3xl font-bold mb-4">Manager Dashboard</h1>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{listings.map((listing) => (
<motion.div
key={listing.id}
whileHover={{ scale: 1.02 }}
className="cursor-pointer"
>
<Card className="shadow-lg rounded-2xl p-4">
<CardContent className={""}>
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
  )
}

export default Home