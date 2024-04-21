import { notFound } from 'next/navigation';
import { fetchReview } from '../services';
import { Header } from '@ems/common-ui';

type Props = {
  params: {
    publicId: string;
  };
};

export default async function ReviewPage({ params }: Props) {
  const publicId = params.publicId;
  const review = await fetchReview(publicId);

  console.log({ review });

  if (!review) {
    notFound();
  }

  return (
    <div>
      <Header>{review.content}</Header>
      <p>{review.author}</p>
    </div>
  );
}
