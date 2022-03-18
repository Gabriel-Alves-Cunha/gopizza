import { RectButtonProps } from "react-native-gesture-handler";
import React from "react";

import { Container, Load, Title, Type } from "./styles";

type Props = RectButtonProps & {
	isLoading?: boolean;
	title: string;
	type?: Type;
};

export function Button({
	type = Type.PRIMARY,
	isLoading = false,
	title,
	...rest
}: Props) {
	return (
		<Container type={type} enabled={!isLoading} {...rest}>
			{isLoading ? <Load /> : <Title>{title}</Title>}
		</Container>
	);
}
