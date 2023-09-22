import { FormEventHandler, useRef } from 'react';
import { Button, Input } from '@ems/common-ui';

import './RegistrationForm.module.css';

export const RegistrationForm = () => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [age, setAge] = useState(0);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    // console.log({ firstName, lastName, age });
    console.log({ firstName: firstNameRef.current?.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input label="First name: " ref={firstNameRef} />
      </div>
      <div>
        <Input label="Last name: " ref={lastNameRef} />
      </div>
      <div>
        <Input type="number" label="Age: " ref={ageRef} />
      </div>
      <Button type="submit" label="Send" />
    </form>
  );
};
