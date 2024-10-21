import Link from "next/link";
const AVAILABLE_REVIEWS = [
  { id: 1, name: "Review 1" },
  { id: 2, name: "Review 2" },
  { id: 3, name: "Review 3" },
];

export default function Reviews({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {AVAILABLE_REVIEWS.map((review) => {
          return (
            <li key={review.id}>
              <Link href={`/products/${params.id}/reviews/${review.id}`}>
                {review.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
