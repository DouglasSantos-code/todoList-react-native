import { AmountListProps, TaskProps } from "../../../@types/types";
import {
  AmountBox,
  AmountNumber,
  AmountNumberBox,
  AmountTasksContainer,
  Concluded,
  Create,
} from "./styles";

export const AmountTasks = ({ list }: AmountListProps) => {
  const amountTask = list.length;
  const amountTaskCompleted = list.filter((item) => item.isChecked).length;

  return (
    <AmountTasksContainer>
      <AmountBox>
        <Create>Criadas</Create>
        <AmountNumberBox>
          <AmountNumber>{amountTask}</AmountNumber>
        </AmountNumberBox>
      </AmountBox>
      <AmountBox>
        <Concluded>Concluidas</Concluded>
        <AmountNumberBox>
          <AmountNumber>{amountTaskCompleted}</AmountNumber>
        </AmountNumberBox>
      </AmountBox>
    </AmountTasksContainer>
  );
};
