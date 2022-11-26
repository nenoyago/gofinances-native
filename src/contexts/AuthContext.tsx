import { createContext, ReactNode } from 'react';

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

type AuthContextData = {
  user: User;
};

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: '123456',
    name: 'Yago Neno',
    email: 'developer.neno@gmail.com',
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
