export default function InidvidualReview({
  params,
}: {
  params: { id: string; reviewId: string };
}) {
  return (
    <div>
      <h1>Review {params.reviewId}</h1>
      <p>This is a review of product {params.id}</p>
    </div>
  );
}
