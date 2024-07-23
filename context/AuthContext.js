import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        setUserToken(token);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    loadToken();
  }, []);

  const login = async (token) => {
    setIsLoading(true);
    await AsyncStorage.setItem("userToken", token);
    console.log("token set in async storage");
    setUserToken(token);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const logout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem("userToken");
    setUserToken(null);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
