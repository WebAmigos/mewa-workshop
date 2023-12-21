import type { ComponentProps } from 'react';

type Props = {
  children: string | undefined;
};

export const Header = ({ children }: ComponentProps<'header'> & Props) => {
  // return <header className="text-3xl font-bold dark:text-white">{children}</header>;
  return <header className="text-3xl font-bold my-2">{children}</header>;
};
