'use client';

import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ReviewsTemplate({ children }: Props) {
  useEffect(() => {
    console.log('hello from template');
  }, []);

  return (
    <div>
      <h3>Template</h3>
      <div>{children}</div>
    </div>
  );
}
