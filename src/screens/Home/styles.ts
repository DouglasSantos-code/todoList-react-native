import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme["--gray-600"]};
`;
export const Header = styled.View`
  height: 140px;
  background-color: ${({ theme }) => theme["--gray-700"]};
  align-items: center;
  justify-content: center;
`;
export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme["--blue"]};
  font-weight: bold;
  font-size: 22px;
`;

export const ListContainer = styled.FlatList`
  margin-left: 24px;
  margin-right: 24px;
`;

export const InputFilterContainer = styled.View`
  flex: 1;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0 8px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme["--gray-400"]};
`;

export const FilterInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme["--gray-100"]};
  margin-left: 16px;
`;
