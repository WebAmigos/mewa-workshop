'use client';

import { useState, useEffect } from 'react';

type Review = {
  id: string;
  content: string;
  author: string;
  created_at: string;
};

type AirtableReviewResponseDto = {
  records: {
    id: string;
    fields: {
      content: string;
      author: string;
      created_at: string;
    };
  }[];
};

// curl "https://api.airtable.com/v0/appeCUUEcDobyWk55/reviews?maxRecords=3&view=default" \
// -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"

// sort%5B0%5D%5Bfield%5D=content
// sort%5B0%5D%5Bdirection%5D=desc

export const ReviewsList = () => {
  const [reviews, setReviews] = useState<Review[] | undefined>(undefined);

  console.log('token: ', process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN);

  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/appeCUUEcDobyWk55/reviews?view=default&sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=desc',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data: AirtableReviewResponseDto) => {
        const _reviews: Review[] = [];
        data.records.forEach((elem) => {
          _reviews.push({
            id: elem.id,
            content: elem.fields.content,
            author: elem.fields.author,
            created_at: elem.fields.created_at,
          });
        });
        setReviews(_reviews);
      });
  }, []);

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
};
