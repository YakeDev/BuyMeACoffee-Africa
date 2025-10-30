/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { apiRequest } from "../lib/apiClient";

const STORAGE_KEYS = {
  user: "buymeacoffee.africa.auth.user",
  token: "buymeacoffee.africa.auth.token",
};

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const readStoredValue = (key) => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn(`Unable to parse stored value for ${key}`, error);
    return null;
  }
};

const writeStoredValue = (key, value) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    if (value === null || value === undefined) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.warn(`Unable to persist value for ${key}`, error);
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => readStoredValue(STORAGE_KEYS.user));
  const [token, setToken] = useState(() => readStoredValue(STORAGE_KEYS.token));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isAuthenticated = Boolean(token && user);

  const persistAuthPayload = useCallback((authPayload) => {
    if (!authPayload) {
      writeStoredValue(STORAGE_KEYS.user, null);
      writeStoredValue(STORAGE_KEYS.token, null);
      setUser(null);
      setToken(null);
      return;
    }

    writeStoredValue(STORAGE_KEYS.user, authPayload.user ?? null);
    writeStoredValue(STORAGE_KEYS.token, authPayload.token ?? null);
    setUser(authPayload.user ?? null);
    setToken(authPayload.token ?? null);
  }, []);

  const login = useCallback(
    (authPayload) => {
      persistAuthPayload(authPayload);
    },
    [persistAuthPayload],
  );

  const logout = useCallback(() => {
    persistAuthPayload(null);
  }, [persistAuthPayload]);

  const refreshSession = useCallback(async () => {
    if (!token) {
      setUser(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await apiRequest("/api/auth/me");
      if (data?.user) {
        writeStoredValue(STORAGE_KEYS.user, data.user);
        setUser(data.user);
      }
    } catch (requestError) {
      setError(requestError);
      logout();
    } finally {
      setIsLoading(false);
    }
  }, [logout, token]);

  useEffect(() => {
    if (token && !user) {
      void refreshSession();
    }
  }, [refreshSession, token, user]);

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated,
      isLoading,
      error,
      login,
      logout,
      refreshSession,
    }),
    [error, isAuthenticated, isLoading, login, logout, refreshSession, token, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
