import { type ComponentProps } from 'react';

type Props = ComponentProps<'label'> & {
  children: string;
};

export const Label = ({ id, children }: Props) => {
  return (
    <label className="block" htmlFor={id}>
      <span className="block text-sm font-medium text-slate-700">
        {children}
      </span>
    </label>
  );
};
