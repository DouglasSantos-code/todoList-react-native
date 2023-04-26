import styled from "styled-components/native";

export const AmountTasksContainer = styled.View`
  margin-top: 32px;
  margin-left: 24px;
  margin-right: 24px;
  padding-bottom: 20px;
  margin-bottom: 16px;
  justify-content: space-between;
  flex-direction: row;
  border-width: 1px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: ${({ theme }) => theme["--gray-400"]};
`;
export const AmountBox = styled.View`
  flex-direction: row;
  gap: 8px;
`;
export const Create = styled.Text`
  color: ${({ theme }) => theme["--blue"]};
  font-size: 14px;
  font-weight: bold;
`;
export const Concluded = styled.Text`
  color: ${({ theme }) => theme["--purple"]};
  font-size: 14px;
  font-weight: bold;
`;
export const AmountNumberBox = styled.View`
  background-color: ${({ theme }) => theme["--gray-400"]};
  width: 25px;
  height: 19px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
`;
export const AmountNumber = styled.Text`
  color: ${({ theme }) => theme["--gray-200"]};
  font-size: 12px;
  font-weight: bold;
`;
