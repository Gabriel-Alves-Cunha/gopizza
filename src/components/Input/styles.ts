import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export enum TextInputType {
	PRIMARY,
	SECONDARY,
}

type Props = { type: TextInputType };

export const Container = styled(TextInput).attrs<Props>(
	({
		theme: {
			COLORS: { PRIMARY_50, SECONDARY_900 },
		},
		type,
	}) => ({
		placeholderTextColor:
			type === TextInputType.PRIMARY ? SECONDARY_900 : PRIMARY_50,
	})
)<Props>`
	width: 100%;
	height: 56px;
	background-color: transparent;
	border-radius: 12px;
	font-size: 14px;
	padding: 7px 0;
	padding-left: 20px;
	margin-bottom: 16px;

	${({
		theme: {
			COLORS: { SECONDARY_900, TITLE, SHAPE },
			FONTS: { TEXT },
		},
		type,
	}) => css`
		font-family: ${TEXT};
		border: 1px solid ${SHAPE};
		color: ${type === TextInputType.PRIMARY ? SECONDARY_900 : TITLE};
	`}
`;
