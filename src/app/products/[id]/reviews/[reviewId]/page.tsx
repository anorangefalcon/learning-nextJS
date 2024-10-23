import { notFound } from "next/navigation";

export default function InidvidualReview({
  params,
}: {
  params: { id: string; reviewId: string };
}) {
  if (params.reviewId && parseInt(params.reviewId) > 100) {
    // notFound is a custom nextJs function to invoke not found page at current level, also it invokes global not found page if current one is not present
    notFound();
  }
  return (
    <div>
      <h1>Review {params.reviewId}</h1>
      <p>This is a review of product {params.id}</p>
    </div>
  );
}
