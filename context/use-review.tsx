"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface ReviewInterface {
  review: Review[] | null;
  loading: boolean;
}

const ReviewContext = createContext<ReviewInterface | null>(null);

export function UseReview() {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("Review Provider not found");
  }
  return context;
}

export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [review, setReview] = useState<Review[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetch("/api/reviews/");
        if (response.ok) {
          const data: Review[] = await response.json();
          setReview(data);
        } else {
          console.error("Something went wrong!");
        }
      } catch (error) {
        const errorM = error as Error;
        console.error(errorM.message);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, []);

  const contextValue: ReviewInterface = {
    review,
    loading,
  };

  return (
    <ReviewContext.Provider value={contextValue}>
      {children}
    </ReviewContext.Provider>
  );
}
