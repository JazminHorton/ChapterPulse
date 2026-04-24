"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
// update: All Firebase imports have been completely removed.
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  // This will eventually make a POST request to your custom backend API
  const login = async (username, password) => {
    // Placeholder for the future API call:
    // const response = await fetch("http://localhost:5000/api/auth/login", { ... })
    // const data = await response.json();
    // setUser(data.user);
    
    console.log("Custom login triggered. Waiting for backend API to be built!");
    // Temporary mock user so I can test the UI:
    setUser({ id: 1, name: "Test User", role: "admin" }); 
  };
 
  const logout = () => {
    //Placeholder for clearing the JWT tokens or cookies
    setUser(null);
  };
 
  useEffect(() => {
    // In a custom backend, you usually check for an existing session token 
    // in local storage or an HTTP-only cookie when the app loads.
    const checkSession = async () => {
        // const token = localStorage.getItem("token");
        // if (token) { ... verify token and set user ... }
    };
    checkSession();
  }, []);
 
  // expose the new generic functions instead of the Firebase ones
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useUserAuth = () => {
  return useContext(AuthContext);
};