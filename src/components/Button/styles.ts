import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export enum Type {
	PRIMARY,
	SECONDARY,
}

type Props = { type: Type };

export const Container = styled(RectButton)<Props>`
	flex: 1;
	max-height: 56px;
	min-height: 56px;
	border-radius: 12px;
	justify-content: center;
	align-items: center;

	background-color: ${({
		theme: {
			COLORS: { PRIMARY_800, SUCCESS_900 },
		},
		type,
	}) => (type === Type.PRIMARY ? SUCCESS_900 : PRIMARY_800)};
`;

export const Title = styled.Text`
	font-size: 14px;

	${({
		theme: {
			COLORS: { TITLE },
			FONTS: { TEXT },
		},
	}) => css`
		color: ${TITLE};
		font-family: ${TEXT};
	`}
`;

export const Load = styled.ActivityIndicator.attrs(
	({
		theme: {
			COLORS: { TITLE },
		},
	}) => ({
		color: TITLE,
	})
)``;
