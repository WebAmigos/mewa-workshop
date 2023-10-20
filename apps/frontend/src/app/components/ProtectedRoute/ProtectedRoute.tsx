import { Navigate } from 'react-router-dom';

type Props = {
  user?: boolean;
  element: React.ReactNode;
};

export const ProtectedRoute = ({ element, user = false }: Props) => {
  if (user) {
    return element;
  }
  return <Navigate to="/registration" />;
};
