"use client";
import { UseReview } from "~/context/use-review";
import LoadingSpinner from "~/utils/icons/loading";
import { ReviewCard } from "./ReviewCard";

export function RenderReviews() {
  const { loading, review } = UseReview();
  if (loading) return <LoadingSpinner />;
  if (!review) return <>Failed to get reviews</>;

  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-6">
      {review.map((item, index) => (
        <ReviewCard key={index} {...item} />
      ))}
    </div>
  );
}
