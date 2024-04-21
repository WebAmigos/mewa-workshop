import Link from 'next/link';

import { format } from 'date-fns';
import { fetchReviews } from '../services';

export default async function ReviewsList() {
  const reviews = await fetchReviews();

  return (
    <div>
      <ul>
        {reviews?.map((elem) => (
          <li key={elem.public_id}>
            <div>
              <Link
                href={`/reviews/${elem.public_id}`}
                className="text-blue-800"
              >
                {elem.content}
              </Link>
            </div>
            <div className="font-light">{elem.author}</div>
            <div className="mb-4 font-light">
              {format(elem.created_at, 'dd.MM.yyyy HH:mm:ss')}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
