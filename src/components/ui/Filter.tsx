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
