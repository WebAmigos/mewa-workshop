import type { ComponentProps } from 'react';

type Props = {
  children: string | undefined;
};

export const Header = ({ children }: ComponentProps<'h1'> & Props) => {
  // return <header className="text-3xl font-bold dark:text-white">{children}</header>;
  return <h1 className="text-3xl font-bold my-2">{children}</h1>;
};
