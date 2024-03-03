import { Header } from '@ems/common-ui';
import { ReviewsList } from './ReviewsList';

export default function AboutPage() {
  return (
    <div>
      <Header>Reviews</Header>
      <p>All reviews</p>
      <ReviewsList />
    </div>
  );
}
