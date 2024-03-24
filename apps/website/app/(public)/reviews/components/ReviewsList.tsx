import { fetchReviews } from '../services';

export default async function ReviewsList() {
  const reviews = await fetchReviews();

  return (
    <div>
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
