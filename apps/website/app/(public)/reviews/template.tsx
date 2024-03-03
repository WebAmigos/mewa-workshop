'use client';

import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ReviewsTemplate({ children }: Props) {
  useEffect(() => {
    //
  }, []);

  return (
    <div>
      <h3>Template</h3>
      {children}
    </div>
  );
}
