import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const FilterOrderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 16px;
`;

export const OrderIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  name: "order-alphabetical-ascending",
  size: 28,
  color: theme["--gray-300"],
}))``;

export const DeleteAllIcon = styled(MaterialCommunityIcons).attrs(
  ({ theme }) => ({
    name: "delete",
    size: 28,
    color: theme["--gray-300"],
  })
)``;
