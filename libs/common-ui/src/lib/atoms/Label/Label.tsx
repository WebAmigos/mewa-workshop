import { type ComponentProps } from 'react';

type Props = ComponentProps<'label'> & {
  children: string;
};

export const Label = ({ id, children }: Props) => {
  return (
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {children}
    </label>
  );
};
