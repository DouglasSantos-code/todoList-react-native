import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons/";

export const BoxList = styled.View`
  background-color: ${({ theme }) => theme["--gray-500"]};
  height: 64px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme["--gray-400"]};
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding-right: 12px;
  padding-left: 12px;
  margin-bottom: 8px;
  margin-left: 24px;
  margin-right: 24px;
`;

export const EditIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 28,
  color: theme["--gray-300"],
  name: "edit",
}))``;

export const DeleteIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 28,
  color: theme["--gray-300"],
  name: "cancel",
}))``;
