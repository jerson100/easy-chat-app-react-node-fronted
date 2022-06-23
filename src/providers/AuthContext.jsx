import React, { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  return (
    <AuthContext.Provider value={{ user: user, setuser: setuser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
