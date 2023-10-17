import React, { createContext, useContext, useState, useEffect } from "react";
import App from "../../App";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employer, setemployer] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };
  console.log(user, "user");

  const signup = (username) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const employerLogin = (userData) => {
    setemployer(userData);
  };

  const employerSignup = (userData) => {
    setemployer(userData);
  };

  const employerLogout = () => {
    setemployer(null);
  };

  useEffect(() => {
    const storedemployer = localStorage.getItem("employer");
    if (storedemployer) {
      setemployer(JSON.parse(storedemployer));
    }
  }, []);

  useEffect(() => {
    if (employer) {
      localStorage.setItem("employer", JSON.stringify(employer));
    } else {
      localStorage.removeItem("employer");
    }
  }, [employer]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        employer,
        employerSignup,
        employerLogin,
        employerLogout,
      }}
    >
      {children}
      {/* <App /> */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
