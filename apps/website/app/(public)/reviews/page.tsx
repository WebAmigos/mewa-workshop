import { Header } from '@ems/common-ui';
import { ReviewsList } from './ReviewsList';
import { fetchReviews } from './services';
import { notFound } from 'next/navigation';

export default async function ReviewsPage() {
  // await new Promise((r) => setTimeout(r, 3000));
  const reviews = await fetchReviews();
  // notFound();

  return (
    <div>
      <Header>Reviews</Header>
      <p>All reviews</p>
      {/* <ReviewsList /> */}
      <ul>
        {reviews?.map((elem) => (
          <li key={elem.id}>
            <div>{elem.content}</div>
            <div className="font-light">{elem.author}</div>
            <div className="mb-4 font-light">{elem.created_at}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
