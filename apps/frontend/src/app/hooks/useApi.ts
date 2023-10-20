import { useEffect, useState } from 'react';

type State<S> =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // fulfilled
      data: S;
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

interface ApiResponse<S> {
  results: S;
}

export const useApi = <T>(url: string) => {
  const [state, setState] = useState<State<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //
      })
      .then((responseData) => {
        setState({
          data: (responseData as ApiResponse<T>).results,
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

  return state;
};
