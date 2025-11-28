import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/ui/Card";
import { Star } from "lucide-react";

export function PropertyPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const listing = {};
  useEffect(() => {}, []);
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{listing?.name}</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Guest Reviews</h2>
        {listing?.reviews?.filter((r) => r.approved).length === 0 && (
          <p className="text-gray-500">No approved reviews yet.</p>
        )}

        <div className="space-y-4">
          {listing?.reviews
            ?.filter((r) => r.approved)
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
