import { Header } from '@ems/common-ui';
import { useApi } from '../../hooks/useApi';

interface UserDto {
  name: {
    first: string;
    last: string;
  };
  email: string;
  id: {
    name: string;
  };
}

export const EmployeesList = () => {
  const { data, isLoading, isError } = useApi<UserDto[]>(
    'https://randomuser.me/api/?results=5'
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oh no, Error!</p>;
  }

  return (
    <div>
      <Header>List</Header>
      {data.map((elem) => (
        <div key={elem.id.name}>
          <div>
            {elem.name.first} {elem.name.last}
          </div>
        </div>
      ))}
    </div>
  );
};
