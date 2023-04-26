import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ButtonInputProps } from "../../../@types/types";

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -28px;
  gap: 6px;
  margin-left: 24px;
  margin-right: 24px;
`;

export const AddInput = styled(TextInput)<ButtonInputProps>`
  flex: 1;
  height: 52px;
  border-radius: 6px;
  padding: 16px;
  background-color: ${({ theme }) => theme["--gray-500"]};
  color: ${({ theme }) => theme["--gray-100"]};

  border: 1px solid
    ${({ theme, type }) =>
      type === "PRIMARY" ? theme["--gray-600"] : theme["--purple"]};
`;

export const ButtonInput = styled(TouchableOpacity)<ButtonInputProps>`
  width: 52px;
  height: 52px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme["--blue-dark"] : theme["--purple"]};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme["--gray-100"]};
`;
