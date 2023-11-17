// createContext
// useContext

import { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
  toggle: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error(
    'Oh no! Component should be placed inside AuthContextProvider'
  );
};

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);
  const toggle = () => setIsLoggedIn((value) => !value);

  return { isLoggedIn, logIn, logOut, toggle };
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};
