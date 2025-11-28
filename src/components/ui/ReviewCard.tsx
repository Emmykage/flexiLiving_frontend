export default function ReviewCard({ review }) {
return (
<div className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
<div className="flex justify-between items-center mb-2">
<h4 className="font-semibold">{review.author}</h4>
<span className="text-yellow-500">⭐ {review.rating}</span>
</div>
<p className="text-sm text-gray-600 mb-3">{review.comment}</p>


<div className="flex items-center justify-between text-xs text-gray-500">
<span>{review.source}</span>
<span>{review.date}</span>
</div>
</div>
);
}