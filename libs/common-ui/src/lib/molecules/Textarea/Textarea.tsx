import {
  forwardRef,
  type ForwardedRef,
  type ComponentPropsWithRef,
} from 'react';

import { classMerge } from '../../utils/cn';
import { FieldError } from 'react-hook-form';
import { Label } from '../../atoms';

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<'textarea'>;

export const Textarea = forwardRef(
  (
    { label, error, className, ...rest }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    // id is needed to provide accessibility and point which label is for which field
    const id = label.replace(' ', '-').toLocaleLowerCase();
    return (
      <div className="my-2">
        <Label id={id}>{label}</Label>
        <textarea
          id={id}
          ref={ref}
          className={classMerge(
            'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:wa-blue sm:text-sm sm:leading-6',
            className
          )}
          {...rest}
        />
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    );
  }
);
