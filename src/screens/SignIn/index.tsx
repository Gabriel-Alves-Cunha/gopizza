import { KeyboardAvoidingView, Platform } from "react-native";
import React from "react";

import brandImg from "@assets/brand.png";

import { TextInputType } from "@components/Input/styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Type } from "@components/Button/styles";

import {
	ForgotPasswordButton,
	ForgotPasswordLabel,
	Container,
	Content,
	Title,
	Brand,
} from "./styles";

export function SignIn() {
	return (
		<Container>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : undefined}
			>
				<Content>
					<Brand source={brandImg} />

					<Title>Login</Title>

					<Input
						type={TextInputType.SECONDARY}
						autoCapitalize="none"
						placeholder="E-mail"
						autoCorrect={false}
					/>
					<Input
						type={TextInputType.SECONDARY}
						placeholder="Senha"
						secureTextEntry
					/>

					<ForgotPasswordButton>
						<ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
					</ForgotPasswordButton>

					<Button title="Entrar" type={Type.SECONDARY} />
				</Content>
			</KeyboardAvoidingView>
		</Container>
	);
}
