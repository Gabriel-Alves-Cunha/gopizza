import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import React from "react";

import { AuthProvider } from "@hooks/auth";
import { SignIn } from "@screens/SignIn";

import theme from "@theme";

export default function App() {
	const [fontsLoaded] = useFonts({
		DMSerifDisplay_400Regular,
		DMSans_400Regular,
	});

	if (!fontsLoaded) return <AppLoading />;

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="light" translucent backgroundColor="transparent" />

			<AuthProvider>
				<SignIn />
			</AuthProvider>
		</ThemeProvider>
	);
}
