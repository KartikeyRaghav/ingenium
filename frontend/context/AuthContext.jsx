"use client";

import { createContext, useEffect, useState, useCallback } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const checkUser = useCallback(async () => {
    try {
      const res = await api.get("/user/profile");
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      setUser(null);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  const logout = async () => {
    try {
      await api.post("http://localhost:5000/api/user/logout");
      localStorage.clear();
      router.replace("/");
    } finally {
      setUser(null);
      router.replace("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn: !!user,
        loading,
        logout,
        refreshUser: checkUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
