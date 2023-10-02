import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { Button, Input } from '@ems/common-ui';

import './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [age, setAge] = useState(0);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  let adult = false;

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({ firstName: firstNameRef.current?.value });
  };

  useEffect(() => {
    adult = age > 18;
  }, [age]);

  return (
    <div>
      <div>
        Current age: {age} ({adult ? 'YES' : 'NO'})
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input label="First name: " ref={firstNameRef} />
        </div>
        <div>
          <Input label="Last name: " ref={lastNameRef} />
        </div>
        <div>
          <Input
            type="number"
            label="Age: "
            onChange={(e) => setAge(parseInt(e.target.value, 10))}
          />
        </div>
        <Button type="submit" label="Send" />
      </form>
    </div>
  );
};
