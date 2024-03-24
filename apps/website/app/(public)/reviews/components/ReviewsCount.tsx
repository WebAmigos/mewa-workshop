import { fetchReviewsCount } from '../services';

export default async function ReviewsCount() {
  const reviewsCount = await fetchReviewsCount();

  return (
    <div>
      <h3 className="mb-4">Count: {reviewsCount}</h3>
    </div>
  );
}
