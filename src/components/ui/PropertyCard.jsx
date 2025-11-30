export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-4">
      <img
        src={property?.image}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold">{property?.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{property?.address}</p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-600">
          Reviews: {property?.reviewCount}
        </span>
        <span className="text-yellow-500 font-semibold text-sm">
          ⭐ {property?.rating}
        </span>
      </div>
    </div>
  );
}
