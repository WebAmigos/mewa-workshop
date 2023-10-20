import { Header } from '@ems/common-ui';
import { useEffect, useState } from 'react';

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

type State =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // fulfilled
      data: UserDto[];
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

interface ApiResponse {
  results: UserDto[];
}

export const EmployeesList = () => {
  const [state, setState] = useState<State>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

  const { data, isLoading, isError } = state;

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //
      })
      .then((responseData) => {
        setState({
          data: (responseData as ApiResponse).results,
          isLoading: false,
          isError: false,
        });
      })
      .catch(() => {
        setState({
          data: undefined,
          isLoading: false,
          isError: true,
        });
      });
  }, []);

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
