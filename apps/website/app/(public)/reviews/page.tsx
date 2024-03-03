import { Header } from '@ems/common-ui';
import { ReviewsList } from './ReviewsList';
import { fetchReviews } from './services';
import Link from 'next/link';

export default async function ReviewsPage() {
  const reviews = await fetchReviews();
  return (
    <div>
      <Header>Reviews</Header>
      <Link href="/reviews/create" className="block py-4 text-blue-500">
        Create review
      </Link>

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
