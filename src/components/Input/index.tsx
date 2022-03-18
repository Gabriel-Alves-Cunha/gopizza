import { TextInputProps } from "react-native";

import React from "react";

import { Container, TextInputType } from "./styles";

type Props = TextInputProps & {
	type?: TextInputType;
};

export function Input({ type = TextInputType.PRIMARY, ...rest }: Props) {
	return <Container type={type} {...rest} />;
}
