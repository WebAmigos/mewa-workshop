import Link from 'next/link';

import { Header } from '@ems/common-ui';

import { ReviewsList } from './ReviewsListClient';
import ReviewsCount from './components/ReviewsCount';
import { Suspense } from 'react';

export default async function ReviewsPage() {
  return (
    <div>
      <Header>Reviews</Header>
      <p>All reviews</p>
      <Link href="/reviews/create" className="my-2 block text-blue-600">
        Create review
      </Link>

      <Suspense fallback={<p>Loading count...</p>}>
        <ReviewsCount />
      </Suspense>

      <Suspense fallback={<p>Loading list...</p>}>
        <ReviewsList />
      </Suspense>
    </div>
  );
}
