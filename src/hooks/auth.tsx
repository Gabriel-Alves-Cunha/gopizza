import React, { createContext, useContext, ReactNode } from "react";
import auth from "@react-native-firebase/auth";

type AuthProvider = { children: ReactNode };

type AuthContextData = {};

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProvider) {
	async function signIn(email: string, password: string) {}

	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

function useAuth() {
	const ctx = useContext(AuthContext);

	return ctx;
}

export { useAuth, AuthProvider };
